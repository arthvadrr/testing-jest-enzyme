import {actionTypes} from "./reducer.ts";

export interface State {
    repositories: any[];
    error: any | null;
}

export interface FetchRequestAction {
    type: typeof actionTypes.FETCH_REQUEST;
    payload: string[]
}

export interface FetchSuccessAction {
    type: typeof actionTypes.FETCH_SUCCESS;
    payload: string[];
}

export interface FetchFailureAction {
    type: typeof actionTypes.FETCH_FAILURE;
    payload: any | any[];
}