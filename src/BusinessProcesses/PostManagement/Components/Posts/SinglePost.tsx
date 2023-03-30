import {Post} from "../../../../Infrastructure/Repositories/MockRepository/Models/Post";

/** Компонент для отдельного поста */
export const SinglePost = ({ post }: {post: Post}) =>
    <div>
        <h2>{post.title}</h2>
        <p>
            {post.text}
        </p>
    </div>