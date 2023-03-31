// https://transform.tools/json-to-typescript

import {Post} from "../Models/Post";

/** DTO Сообщения */
export interface PostDto {
    /** Id Пользователя */
    readonly userId: number
    /** Id поста */
    readonly id: number
    /** Название */
    readonly title: string
    /** Сообщение */
    readonly body: string
}

export function mapToPost(dto: PostDto): Post {
    const post: Post = {
        ...dto, // В случае различий полей - можно их замапить/инициализировать отдельно,
        text: dto.body
    };
    return post;
}