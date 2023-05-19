import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GiftModule } from './gifs/gift.module';
import { SharedModule } from './shared/shared.module';

import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GiftModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
