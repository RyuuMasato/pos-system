import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';

import { AppComponent } from './app.component';
import { StudentDetailComponent } from './components/student-detail.component';
import { StudentMasterComponent } from './components/student-master.component';

import { FirebaseService } from './providers/firebase-service.provider';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentMasterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ FirebaseService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
