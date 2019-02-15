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
  objOrder = localStorage.getItem('orders')!== null ? JSON.parse(localStorage.getItem('orders')) : {};
  date=new Date();
  time=this.date.getTime();
  ngOnInit() {
    this.getProductsFromLocal();
    this.totalPrice();
    console.log(localStorage.getItem('orders')!== null ? JSON.parse(localStorage.getItem('orders')) : "No orders yet, make your order now ! :)")
  }



  getProductsFromLocal() {
    for (const prop of this.getKeysOfProductsFromLocal) {
      this.arrayOfProductsInLocal.push([this.products.getProductsFromLocal[prop].productName, this.products.getProductsFromLocal[prop].productPrice, this.products.getProductsFromLocal[prop].productImg, this.products.getProductsFromLocal[prop].productSize, this.products.getProductsFromLocal[prop].quantity]);
    }
  }

  totalPrice() {
    if (this.arrayOfProductsInLocal.length == 0) {
      this.totalPriceSum = 0;
    } else {
      for (const prop of this.getKeysOfProductsFromLocal) {
        this.arrayOfproductsPriceFromCart.push(this.products.getProductsFromLocal[prop].productPrice.slice(0, -2)*this.products.getProductsFromLocal[prop].quantity)
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

  checkeQuantity(event) {
    let targetValue = event.target.value,
        targetId = event.target.id;
      for (let index = 0; index < this.arrayOfProductsInLocal.length; index++) {
        if (this.arrayOfProductsInLocal[index][0]==targetId) {
          this.arrayOfProductsInLocal[index][4]=parseInt(targetValue)
        }
      }
      for (const prop of this.getKeysOfProductsFromLocal) {
        if (this.products.getProductsFromLocal[prop].productName==targetId) {
          this.products.getProductsFromLocal[prop].quantity=parseInt(targetValue);
        }
        localStorage.setItem('productsInCart', JSON.stringify(this.products.getProductsFromLocal));
      }
      this.totalPriceSum=0;
      this.arrayOfproductsPriceFromCart=[];
      this.totalPrice();
     
  }

  openModalBuy() {
    let modalBuy = document.getElementById('modalBuy');
    modalBuy.style.display = 'block';
  }
  closeModalBuy(event) {
    let modalBuy = document.getElementById('modalBuy');
    if (event.target.id == "modalBuy") {
      modalBuy.style.display = 'none';
    }
  }
  finishOrder(event) {
    event.preventDefault();
    let getDataFromFormBuy = event.target.form,
      modalBuy = document.getElementById('modalBuy');
    for (let index = 0; index < getDataFromFormBuy.length; index++) {
      if (getDataFromFormBuy[index].value === "") {
        alert('All inputs are required !');
        return;
      }
    }
    let NewobjOrder = {
      firstName: getDataFromFormBuy[0].value,
      lastName: getDataFromFormBuy[1].value,
      dateOfBirth: getDataFromFormBuy[2].value,
      country: getDataFromFormBuy[3].value,
      city: getDataFromFormBuy[4].value,
      address: getDataFromFormBuy[5].value,
      postaCode: getDataFromFormBuy[6].value,
      products: {
        productsToSend: this.arrayOfProductsInLocal
      },
      TotalPrice: this.totalPriceSum
    }
    this.objOrder[NewobjOrder.firstName + NewobjOrder.lastName + this.time] = NewobjOrder;
    localStorage.setItem('orders', JSON.stringify(this.objOrder));
    modalBuy.style.display = "none";
    this.arrayOfProductsInLocal = [];
    this.totalPriceSum = 0;
    localStorage.removeItem('productsInCart');
    alert('Your order is successfully send ! Thank you for shopping :) You can see your order in console !');
    location.reload();     // JUST FOR CHECK
  }
}

