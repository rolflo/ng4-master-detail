import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import {ButtonModule} from 'primeng/primeng';

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
    DataTableModule,
    SharedModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
