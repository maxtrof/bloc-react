import {IPostManagementAction} from "./IPostManagementAction";

/** Вкл/выкл сокращение текста */
export class PostManagementSetCut implements IPostManagementAction {
    constructor(readonly cutText: boolean) {
    }
}