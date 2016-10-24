import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { Routing, Components } from './app.routes';

export const firebaseConfig = {
  apiKey: "AIzaSyCmtYJ8i2jh5ncDSUCLKhGFw95eiASFVGg",
  authDomain: "wedding-21894.firebaseapp.com",
  databaseURL: "https://wedding-21894.firebaseio.com",
  storageBucket: "wedding-21894.appspot.com"
};

@NgModule({
  declarations: [
    AppComponent, ...Components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    Routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
