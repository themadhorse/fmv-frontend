import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp({"projectId":"financial-market-visualizer","appId":"1:785271052222:web:0d589983f4782a40508bef","databaseURL":"https://financial-market-visualizer-default-rtdb.asia-southeast1.firebasedatabase.app","storageBucket":"financial-market-visualizer.appspot.com","apiKey":"AIzaSyAhGCElco9uZMwXPtGOyvdSawvwGXumoe8","authDomain":"financial-market-visualizer.firebaseapp.com","messagingSenderId":"785271052222","measurementId":"G-9Q2VP1QCTY"})),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
