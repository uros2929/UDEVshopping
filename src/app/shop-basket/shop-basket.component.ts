import { Component, OnInit } from '@angular/core';
import { ProductsObjectsService } from '../products-objects.service';


@Component({
  selector: 'app-shop-basket',
  templateUrl: './shop-basket.component.html',
  styleUrls: ['./shop-basket.component.scss']
})
export class ShopBasketComponent implements OnInit {



  constructor(private products:ProductsObjectsService) {}

  numOfProdInCart=this.products.getNumOfProductsInCart;
  getKeysOfProductsFromLocal=Object.keys(this.products.getProductsFromLocal);
  arrayOfproductsNameFromLocalStorage=[];
  ngOnInit() {
    this.getProductsFromLocalStorage();
   
  }

  getProductsFromLocalStorage(){
    for (const prop of this.getKeysOfProductsFromLocal) {
      console.log(this.products.getProductsFromLocal[prop])
    }
  }



  
}

