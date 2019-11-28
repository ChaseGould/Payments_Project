import { Injectable, RootRenderer } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData:PaymentDetail
  readonly rootURL = 'https://localhost:44309/api'
  list : PaymentDetail[];

  constructor(private http:HttpClient) { }

  postPaymentDetail(formData:PaymentDetail){
    return this.http.post(this.rootURL+'/PaymentDetails',formData)
  }

  refreshList(){
    this.http.get(this.rootURL+'/PaymentDetails')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}
