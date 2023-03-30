import {Post} from "../Repositories/MockRepository/Models/Post";

/** Описывает репозиторий постов  */
export interface IMockRepository {
    /** Получить все посты */
    getAllPosts(): Promise<Post[]>;
    /** Получить отдельный пост
     * @param id {number} Id поста */
    getSinglePost(id: number): Promise<Post>;
}

