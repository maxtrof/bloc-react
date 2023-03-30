import {IMockRepository} from "../../Interfaces/IMockRepository";
import {Post} from "./Models/Post";
import axios, {AxiosError} from "axios";
import {PostDto} from "./Dto/PostDto";
import {injectable} from "inversify";

/** Релизация {@link IMockRepository} */
@injectable()
export class MockRepository implements IMockRepository{
    // todo config
    private readonly baseUrl = "https://jsonplaceholder.typicode.com";
    private readonly timeout = 3000;
    private readonly getAllPostsUrl = "/posts";
    private readonly getPostUrl = "/posts/{0}";
    // todo
    private client = axios.create({
        baseURL: this.baseUrl,
        timeout: this.timeout
    });

    /** @inheritdoc */
    async getAllPosts(): Promise<Post[]> {
        try {
          const response = await this.client.get<PostDto[]>(this.getAllPostsUrl);
          const mapped = response.data.map(x => {
              const post: Post = {
                ...x, // В случае различий полей - можно их замапить/инициализировать отдельно,
                text: x.body
              };
              return post;
          });
          return mapped;
        } catch (e) {
            this.processError(e);
            throw e;
        }
    }

    /** @inheritdoc */
    async getSinglePost(id: number): Promise<Post> {
        try {
            const response = await this.client.get<PostDto>(this.getPostUrl.replace("{0}", id.toString()));
            const post: Post = {
                ...response.data, // В случае различий полей - можно их замапить/инициализировать отдельно,
                text: response.data.body
            };
            return post;
        } catch (e) {
            this.processError(e);
            throw e;
        }
    }

    private processError(e: unknown | AxiosError) {
        if (e instanceof AxiosError) {
            if (e.code === 'ECONNABORTED') //log timeout
               console.log('timeout');
        }
    }
}