import {diAliases} from "../../../diAliases";
import {useBusinessProcess} from "../../../CommonHooks/UseBusinessProcess";
import {IPostManagementState} from "../State/IPostManagementState";
import {IPostManagementAction} from "../Actions/IPostManagementAction";
import {PostManagementLoadingState} from "../State/PostManagementLoadingState";
import {PostManagementAllPostsState} from "../State/PostManagementAllPostsState";
import {PostList} from "../Components/Posts/PostList";
import {PostManagementSetCut} from "../Actions/PostManagementToggleCutAction";
export const PostManagement = () => {
    const [state, action] = useBusinessProcess<IPostManagementState, IPostManagementAction>(diAliases.PostManagementBusinessProcess);

    if (state instanceof PostManagementLoadingState) {
        return <div>Loading</div>;
    }

    if (state instanceof PostManagementAllPostsState) {
        return <div>
            <h1>{state.cutText ? "text cuted" : "text not cuted"}</h1>
            <button onClick={() => action(new PostManagementSetCut(!state.cutText))}>Toggle text cut</button>
            <PostList posts={state.posts} />
        </div>
    }

    return <div></div>
}