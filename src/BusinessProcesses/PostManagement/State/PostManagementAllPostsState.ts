import {IPostManagementState} from "./IPostManagementState";
import {Post} from "../../../Infrastructure/Repositories/MockRepository/Models/Post";

/** Состояние отображения всех постов */
export class PostManagementAllPostsState implements IPostManagementState{
    constructor(
        readonly posts: Post[],
        readonly cutText: boolean) {}
}