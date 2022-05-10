import { createReducer, on } from "@ngrx/store"
import { Result } from "../upload/response.model";
import { requestedSuccesfully, startRequesting } from "./app.actions"

export interface State {
    isRequesting: boolean,
    result: Result[]
}

export const initialState: State = {
    isRequesting: false,
    result: []
};

export const appReducer = createReducer(
    initialState,
    on(startRequesting, state => {
        console.log('Start requesting!');
        return ({
            ...state,
            isRequesting: true
        });
    }),
    on(requestedSuccesfully, (state, { result }) => {
        console.log('Requested succesfully!');
        return ({
            ...state,
            isRequesting: false,
            result: result
        });
    })
);