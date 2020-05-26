import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './containers/app.component';
import {TruckTopComponent} from './components/truck-top/truck-top.component';

@NgModule({
  declarations: [
    AppComponent,
    TruckTopComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
