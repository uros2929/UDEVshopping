import { Component, OnInit } from '@angular/core';
import { ProductsObjectsService } from '../products-objects.service';



@Component({
  selector: 'app-shop-basket',
  templateUrl: './shop-basket.component.html',
  styleUrls: ['./shop-basket.component.scss']
})
export class ShopBasketComponent implements OnInit {



  constructor(private products: ProductsObjectsService) { }


  getKeysOfProductsFromLocal = Object.keys(this.products.getProductsFromLocal);

  arrayOfProductsInLocal = [];
  arrayOfproductsPriceFromCart = [];
  totalPriceSum;
  ngOnInit() {
    this.getProductsFromLocal();
    this.totalPrice();
  }

  getProductsFromLocal() {
    for (const prop of this.getKeysOfProductsFromLocal) {
      this.arrayOfProductsInLocal.push([this.products.getProductsFromLocal[prop].productName, this.products.getProductsFromLocal[prop].productPrice, this.products.getProductsFromLocal[prop].productImg,this.products.getProductsFromLocal[prop].productSize]);
    }
  }

  totalPrice() {
    if (this.arrayOfProductsInLocal.length == 0) {
      this.totalPriceSum = 0;
    } else{
      for (const prop of this.getKeysOfProductsFromLocal) {
        this.arrayOfproductsPriceFromCart.push(this.products.getProductsFromLocal[prop].productPrice.slice(0, -2))
      }
      this.totalPriceSum = this.arrayOfproductsPriceFromCart.reduce((a, b) => parseInt(a) + parseInt(b));
    }
  }

  removeProductFromCart(event) {
    delete this.products.getProductsFromLocal[event.target.id];
    localStorage.setItem('productsInCart', JSON.stringify(this.products.getProductsFromLocal));
    this.getKeysOfProductsFromLocal = Object.keys(this.products.getProductsFromLocal);
    this.arrayOfProductsInLocal = [];
    this.arrayOfproductsPriceFromCart = [];
    this.getProductsFromLocal();
    this.totalPrice();
  }

  checkeQuantity(event){
    // this.arrayOfProductsInLocal=[];
    let targetValue=event.target.value;
    console.log(targetValue)

    // console.log(this.arrayOfProductsInLocal)
    // console.log(this.arrayOfProductsInLocal)
    // console.log(this.products.getProductsFromLocal[event.target.id].productPrice)
    // console.log(event.target.id)
    // console.log(event.target.value)
  }

}

