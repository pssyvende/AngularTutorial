import { createAction } from '@ngrx/store';

export const startRequesting = createAction(
    '[Upload Page] Start requesting API'
);
export const requestedSuccesfully = createAction(
    '[Upload Page] API was successfully requested'
);