import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceServiceService {
  [x: string]: any;

  constructor(public Httpclient:HttpClient) {
    Httpclient.get("https://fakestoreapi.com/products")
   }

   getAllProducts(): Observable<any>{
    return this.Httpclient.get("https://fakestoreapi.com/products")
   }
}
