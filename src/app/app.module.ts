import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'; // <-- NgModel lives here

import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './containers/app.component';
import {TruckListComponent} from './components/truck-list/truck-list.component';
import {TruckHeadComponent} from "./components/truck-head/truck-head.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddTruckComponent } from './components/add-truck/add-truck.component';

@NgModule({
  declarations: [
    AppComponent,
    TruckListComponent,
    TruckHeadComponent,
    AddTruckComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  entryComponents: [AddTruckComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
