import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { DataTableModule, SharedModule, DialogModule, ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { MasterDetailComponent } from './master-detail/master-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MasterDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    DataTableModule,
    SharedModule,
    ButtonModule,
    DialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
