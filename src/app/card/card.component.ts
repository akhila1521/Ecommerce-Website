import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{


allpro: any;
localProducts:any;
contidad: any;

ngOnInit(): void {
  if (localStorage.getItem("productsData") !== null) { 
    this.allpro = JSON.parse(localStorage.getItem('productsData')?.toString() ?? '{}');
  }
}

deleteItem(proInfo: any) :any{
  this.localProducts = JSON.parse(localStorage.getItem("productsData")?.toString() ?? '{}');
  for(let i=0;i<this.localProducts.length;i++){
    if(this.localProducts[i]['id'] == proInfo.id){
      this.localProducts.splice(i,1);
      localStorage.setItem('productsData', JSON.stringify(this.localProducts));
    }
    return true;
  }
  }

}
