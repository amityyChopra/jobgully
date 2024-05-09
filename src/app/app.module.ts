import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from  './footer/footer.component';
import { HomeComponent } from './home/home.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HeaderComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
