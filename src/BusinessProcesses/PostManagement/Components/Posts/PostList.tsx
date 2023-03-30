import {Post} from "../../../../Infrastructure/Repositories/MockRepository/Models/Post";
import {SinglePost} from "./SinglePost";

/** Компонент списка постов */
export const PostList = ({posts}: {posts: Post[]}) =>
    <div>{posts.map(x => <SinglePost key={x.id} post={x}/>)}</div>;