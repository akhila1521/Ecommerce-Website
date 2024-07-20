import { Component } from '@angular/core';
import { ProductserviceServiceService } from '../productservice-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  index : any;
  allproducts:any={};
  productsArr:any[] = [];

  constructor(provideService: ProductserviceServiceService,
    activated: ActivatedRoute,
  ){
this.index = activated.snapshot.paramMap.get('id');
provideService.getAllProducts().subscribe(data=>{
  this.allproducts = data[this.index];
})
 }

 addcard(prodata: any){

  if(localStorage.getItem("productsData") == null){
    this.productsArr = [];
    this.productsArr.push(prodata);
    localStorage.setItem("productsData", JSON.stringify(this.productsArr));
  }
  else{
    this.productsArr.push(prodata);
    localStorage.setItem("productsData", JSON.stringify(this.productsArr));
  }

 }
  
}
