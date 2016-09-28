import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyCFj19VKwo1B6AWODyFsIX0W87Uf_0ApKw",
  authDomain: "colorwars.firebaseapp.com",
  databaseURL: "https://colorwars.firebaseio.com",
  storageBucket: "firebase-colorwars.appspot.com",
  messagingSenderId: "42528046558"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
