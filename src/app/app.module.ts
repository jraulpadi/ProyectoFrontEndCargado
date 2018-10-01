import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ProductoSearchComponent } from './producto-search/producto-search.component';
import { LocalsComponent } from './locals/locals.component';

import {DataTableModule} from "angular-6-datatable";


@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    ProductoDetalleComponent,
    MessagesComponent,
    DashboardComponent,
    ProductoSearchComponent,
    LocalsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DataTableModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule, 
    HttpClientModule,
// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
  HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
  )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
