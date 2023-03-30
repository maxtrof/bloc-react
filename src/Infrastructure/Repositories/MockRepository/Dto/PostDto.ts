// https://transform.tools/json-to-typescript

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