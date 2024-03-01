import {
    FetchFailureAction,
    FetchRequestAction,
    FetchSuccessAction
} from "./interfaces.ts";

export type Action = FetchRequestAction | FetchSuccessAction | FetchFailureAction;