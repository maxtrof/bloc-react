import {useInjection} from "inversify-react";
import {useEffect, useState} from "react";
import {IBusinessProcess} from "../BusinessProcesses/IBusinessProcess";

export function useBusinessProcess<S, A>(name: symbol): [S, ((action: A) => undefined)]  {
    const bp: IBusinessProcess<S, A> = useInjection(name);
    const [state, updateState] = useState(bp.state.value);

    useEffect(() => {
       bp.init();
       const sub = bp.state.subscribe(x => updateState(x));
       return () => sub.unsubscribe();
    }, [bp]);

    return [state, (x => bp.sendAction(x))];
}