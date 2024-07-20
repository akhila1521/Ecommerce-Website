import { Component } from '@angular/core';
import { ProductserviceServiceService } from '../productservice-service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {


isLoaded: boolean = false;
  term!: string;
allProducts = [];
newobj:any;
productsArr:any;

constructor(public productService : ProductserviceServiceService){
  productService.getAllProducts().subscribe((allData) =>{
    console.log(allData);
    this.allProducts = allData;
    this.isLoaded = true
  })
}
getData(proData:any):any{
  this.newobj = proData;
  if(localStorage.getItem('productsData') == null){
    this.productsArr = [];
    this.productsArr.push(proData);
    localStorage.setItem('productsData', JSON.stringify(this.productsArr))
  }else{
    this.productsArr.push(proData);
    localStorage.setItem('productsData', JSON.stringify(this.productsArr))
  }
}

}
