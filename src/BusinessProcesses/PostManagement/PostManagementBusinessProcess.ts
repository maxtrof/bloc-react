import type {IPostManager} from "../../Business/Interfaces/IPostManager";
import {inject, injectable} from "inversify";
import {diAliases} from "../../diAliases";
import {BehaviorSubject} from "rxjs";
import {IPostManagementState} from "./State/IPostManagementState";
import {IBusinessProcess} from "../IBusinessProcess";
import {IPostManagementAction} from "./Actions/IPostManagementAction";
import {PostManagementLoadingState} from "./State/PostManagementLoadingState";
import {PostManagementAllPostsState} from "./State/PostManagementAllPostsState";
import {PostManagementSetCut} from "./Actions/PostManagementToggleCutAction";

/** Бизнес-процесс менеджмента постов */
@injectable()
export class PostManagementBusinessProcess implements IBusinessProcess<IPostManagementState, IPostManagementAction>{
    private readonly _postManager: IPostManager;

    readonly state = new BehaviorSubject<IPostManagementState>(new PostManagementLoadingState());

    constructor(@inject(diAliases.IPostManager) private postManager: IPostManager) {
        this._postManager = postManager;
        console.log("initialized");
    }

    sendAction(action: IPostManagementAction): undefined {
        if(action instanceof PostManagementSetCut) {
            this._cutAction(action);
        }
        return undefined;
    }

    async init(): Promise<void> {
        const data = await this._postManager.getAllPosts();
        this.state.next(new PostManagementAllPostsState(data, false));
    }

    private _cutAction(action: PostManagementSetCut): void {
        this._postManager.getAllPosts(action.cutText)
            .then(x => this.state.next(new PostManagementAllPostsState(x, action.cutText)));
    }


}