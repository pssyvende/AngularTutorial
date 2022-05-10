import { createReducer, on } from "@ngrx/store"
import { startRequesting } from "./app.actions"

export interface State {
    isRequesting: boolean
}

export const initialState: State = {
    isRequesting: false
};

export const appReducer = createReducer(
    initialState,
    on(startRequesting, state => {
        console.log('Start requesting!');
        return ({
            ...state,
            isRequesting: true
        });
    })
);