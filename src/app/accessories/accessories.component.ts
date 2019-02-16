import { Component, OnInit } from '@angular/core';
import { ProductsObjectsService } from '../products-objects.service';
import { ModalsForResponsiveService } from '../modals-for-responsive.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {

  constructor(private products:ProductsObjectsService,public modalsResponsive:ModalsForResponsiveService) { }

  numOfProdInCart=this.products.getNumOfProductsInCart;
  objAccessories=this.products.cardObjAccessories;

  arrayOfKeysFromObj=[];
  arrayForAccessories=[];
  ngOnInit() {
   this.showProductsForAccessories();
   this.numOfProdInCart=Object.keys(this.products.getProductsFromLocal).length;
  }

  showProductsForAccessories(){
    this.arrayOfKeysFromObj=Object.keys(this.objAccessories);
    for (const prop of this.arrayOfKeysFromObj) {
      this.arrayForAccessories.push([this.objAccessories[prop].class,this.objAccessories[prop].img,this.objAccessories[prop].title,this.objAccessories[prop].price,this.objAccessories[prop].brand,this.objAccessories[prop].accessories,this.objAccessories[prop].size])
    }
  }

showBags(){
  this.arrayForAccessories=[];
  this.arrayOfKeysFromObj=Object.keys(this.objAccessories);
  for (const prop of this.arrayOfKeysFromObj) {
    if (this.objAccessories[prop].accessories == 'bag') {
      this.arrayForAccessories.push([this.objAccessories[prop].class,this.objAccessories[prop].img,this.objAccessories[prop].title,this.objAccessories[prop].price,this.objAccessories[prop].brand,this.objAccessories[prop].accessories,this.objAccessories[prop].size])
    }
  }
}
showCaps(){
  this.arrayForAccessories=[];
  this.arrayOfKeysFromObj=Object.keys(this.objAccessories);
  for (const prop of this.arrayOfKeysFromObj) {
    if (this.objAccessories[prop].accessories == 'cap') {
      this.arrayForAccessories.push([this.objAccessories[prop].class,this.objAccessories[prop].img,this.objAccessories[prop].title,this.objAccessories[prop].price,this.objAccessories[prop].brand,this.objAccessories[prop].accessories,this.objAccessories[prop].size])
    }
  }
}
showSocks(){
  this.arrayForAccessories=[];
  this.arrayOfKeysFromObj=Object.keys(this.objAccessories);
  for (const prop of this.arrayOfKeysFromObj) {
    if (this.objAccessories[prop].accessories == 'socks') {
      this.arrayForAccessories.push([this.objAccessories[prop].class,this.objAccessories[prop].img,this.objAccessories[prop].title,this.objAccessories[prop].price,this.objAccessories[prop].brand,this.objAccessories[prop].accessories])
    }
  }
}
addProductInCart(event) {
  this.products.addProductsInLocalStorage(event);
  this.numOfProdInCart ++;
}
}
