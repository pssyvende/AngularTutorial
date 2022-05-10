import { Actions, createEffect, ofType } from "@ngrx/effects";
import { requestedSuccesfully, startRequesting } from "./app.actions";
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";
import { State } from "./app.reducer";
import { Injectable } from "@angular/core";
import { Response } from '../upload/response.model'

@Injectable()
export class AppEffects {

    constructor(private actions$: Actions, private http: HttpClient, private store: Store<{app: State}>) {}
    
    findAnime$ = createEffect(() => this.actions$.pipe(
        ofType(startRequesting),
        switchMap((action) => {
            return this.http.post<Response>('https://api.trace.moe/search?anilistInfo', action.image).pipe(
                map((response) => {
                    console.log("In effect!");
                    return requestedSuccesfully();
                })
            )
        })
    ));
}