import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import {appReducer} from "../store/app/app.reducer";
import { EffectsModule } from '@ngrx/effects';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {AppEffects} from "../store/app/app.effects";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    StoreModule.forRoot({
      app: appReducer
    }, {}),
    EffectsModule.forRoot([AppEffects]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
