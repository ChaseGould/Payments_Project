import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient, HttpRequest } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  formData:PaymentDetail

  constructor() { }

  postPaymentDetail(formData:PaymentDetail){

  }
}
