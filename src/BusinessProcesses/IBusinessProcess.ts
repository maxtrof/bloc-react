import {BehaviorSubject} from "rxjs";

export interface IBusinessProcess<S, A> {
    init(): Promise<void>;
    state: BehaviorSubject<S>;
    sendAction(action: A): undefined;
}