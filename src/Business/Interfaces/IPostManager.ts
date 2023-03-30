import {Post} from "../../Infrastructure/Repositories/MockRepository/Models/Post";

/** Описывает менеджер постов */
export interface IPostManager {
    /** Получить пост
     * @param id {number} Id поста */
    getPost(id: number): Promise<Post>;
    /** Получить все посты
     * @param cutText {boolean} Нужно ли сократить текст */
    getAllPosts(cutText?: boolean): Promise<Post[]>;
}