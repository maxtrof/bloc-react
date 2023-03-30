import {IPostManager} from "../Interfaces/IPostManager";
import {Post} from "../../Infrastructure/Repositories/MockRepository/Models/Post";
import {inject, injectable} from "inversify";
import {diAliases} from "../../diAliases";
import type {IMockRepository} from "../../Infrastructure/Interfaces/IMockRepository";

/** Менеджер постов */
@injectable()
export class PostManager implements IPostManager{
    private readonly _repository: IMockRepository;

    constructor(@inject(diAliases.IMockRepository) private repository: IMockRepository) {
        this._repository = repository;
    }

    /** @inheritDoc */
    async getAllPosts(cutText: boolean = false): Promise<Post[]> {
        const posts = await this._repository.getAllPosts();
        if (cutText) // Мок бизнес-логики
            posts.forEach(x => x.text.substring(0, 20) + "...");
        return posts;
    }

    /** @inheritDoc */
    async getPost(id: number): Promise<Post> {
        // Мок бизнес-логики
        if (id > 20) console.log("Something happend!");
        const post = await this._repository.getSinglePost(id);
        return post;
    }

}