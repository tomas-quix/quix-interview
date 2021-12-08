import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {helloWorld, loadHelloWorld} from "./app.actions";
import {concatMap, delay, of} from "rxjs";
import {map} from "rxjs/operators";

@Injectable()
export class AppEffects {

  loadHelloWorldMessage = createEffect(() => this.actions$.pipe(
      ofType(loadHelloWorld),
      concatMap(_ => of("Hello world from fake server").pipe(delay(1000))),
      map(message => helloWorld({message}))
    )
  );

  constructor(
    private actions$: Actions
  ) {}
}
