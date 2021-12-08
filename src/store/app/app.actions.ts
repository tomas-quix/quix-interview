import {createAction, props} from "@ngrx/store";

export const helloWorld = createAction('helloWorld', props<{message: string}>());

// Example of async hello world action.
export const loadHelloWorld = createAction('loadHelloWorld');
