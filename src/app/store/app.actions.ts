import { createAction, props } from '@ngrx/store';

export const startRequesting = createAction(
    '[Upload Page] Start requesting API',
    props<{ image: FormData }>()
);
export const requestedSuccesfully = createAction(
    '[Upload Page] API was successfully requested'
);