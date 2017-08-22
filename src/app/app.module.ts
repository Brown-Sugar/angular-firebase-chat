import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {FormsModule} from "@angular/forms";

export const firebaseConfig = {
  apiKey: 'AIzaSyC18sqDSDTv8Qla28WPk4XZnmyTfy5Wcyk',
  authDomain: 'huseyin-babal.firebaseapp.com',
  databaseURL: 'https://huseyin-babal.firebaseio.com',
  projectId: 'huseyin-babal',
  storageBucket: 'huseyin-babal.appspot.com',
  messagingSenderId: '128896541689'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
