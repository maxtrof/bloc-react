import {IMockRepository} from "../../Interfaces/IMockRepository";
import {Post} from "./Models/Post";
import {AxiosError} from "axios";
import type {AxiosInstance} from "axios";
import {mapToPost, PostDto} from "./Dto/PostDto";
import {inject, injectable} from "inversify";
import {diAliases} from "../../../diAliases";

/** Релизация {@link IMockRepository} */
@injectable()
export class MockRepository implements IMockRepository{
    // todo config
    private readonly baseUrl = "https://jsonplaceholder.typicode.com";
    private readonly timeout = 3000;
    private readonly getAllPostsUrl = "/posts";
    private readonly getPostUrl = "/posts/{0}";
    // todo

    private _client: AxiosInstance;

    constructor(@inject(diAliases.Axios) private axios: AxiosInstance) {
        this._client = axios;
        this._client.defaults.baseURL = this.baseUrl;
        this._client.defaults.timeout = this.timeout;
    }

    /** @inheritdoc */
    async getAllPosts(): Promise<Post[]> {
        try {
          const response = await this._client.get<PostDto[]>(this.getAllPostsUrl);
          const mapped = response.data.map(x => mapToPost(x));
          return mapped;
        } catch (e) {
            this.processError(e);
            throw e;
        }
    }

    /** @inheritdoc */
    async getSinglePost(id: number): Promise<Post> {
        try {
            const response = await this._client.get<PostDto>(this.getPostUrl.replace("{0}", id.toString()));
            const mapped = mapToPost(response.data);
            return mapped;
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