import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { PaymentDetailComponent } from './payment-details/payment-detail/payment-detail.component';
import { PaymentDetailListComponent } from './payment-details/payment-detail-list/payment-detail-list.component';
import { PaymentDetailService } from './shared/payment-detail.service';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';

const firebaseConfig = {
  apiKey: "AIzaSyAilWKb9vw5VWTGZNV0WNTmiLtYbo5uhug",
  authDomain: "fir-auth-52205.firebaseapp.com",
  databaseURL: "https://fir-auth-52205.firebaseio.com",
  projectId: "fir-auth-52205",
  storageBucket: "fir-auth-52205.appspot.com",
  messagingSenderId: "641295054798",
  appId: "1:641295054798:web:e9a7ae512d1bc579bfdd9f",
  measurementId: "G-9F8SE6KTRZ"
};

@NgModule({
  declarations: [
    AppComponent,
    PaymentDetailsComponent,
    PaymentDetailComponent,
    PaymentDetailListComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [PaymentDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
