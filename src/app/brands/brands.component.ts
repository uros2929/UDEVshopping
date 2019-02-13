import { Component, OnInit } from '@angular/core';
import { ProductsObjectsService } from '../products-objects.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  
  constructor(private products:ProductsObjectsService) { }

  numOfProdInCart=this.products.getNumOfProductsInCart;
  objOfShoes=this.products.cardsObjShoes;
  objOfClothes=this.products.cardObjClothes;
  objOfAccessories=this.products.cardObjAccessories;

  index=1;
  arrayForClickedBrand=[];
  keysOfObjProductsShoes=[];
  keysOfObjProductsClothes=[];
  keysOfObjProductsAccessories=[];
  arrayForBrand=[];

  ngOnInit() {
    this.numOfProdInCart=Object.keys(this.products.getProductsFromLocal).length;
  }


  showNikeProducts(){
  this.arrayForClickedBrand=[];
  this.arrayForBrand=[];
  this.arrayForClickedBrand.push('nike');
  this.keysOfObjProductsShoes=Object.keys(this.objOfShoes);
  this.keysOfObjProductsClothes=Object.keys(this.objOfClothes);
  this.keysOfObjProductsAccessories=Object.keys(this.objOfAccessories);
  for (const prop of this.keysOfObjProductsShoes) {
    if(this.objOfShoes[prop].brand == 'nike'){
      this.arrayForBrand.push([this.objOfShoes[prop].class,this.objOfShoes[prop].img,this.objOfShoes[prop].title,this.objOfShoes[prop].price,this.objOfShoes[prop].size])
    }
  }
  for (const prop of this.keysOfObjProductsClothes) {
    if(this.objOfClothes[prop].brand == 'nike'){
      this.arrayForBrand.push([this.objOfClothes[prop].class,this.objOfClothes[prop].img,this.objOfClothes[prop].title,this.objOfClothes[prop].price,this.objOfClothes[prop].size])
    }
  }
  for (const prop of this.keysOfObjProductsAccessories) {
    if(this.objOfAccessories[prop].brand == 'nike'){
      this.arrayForBrand.push([this.objOfAccessories[prop].class,this.objOfAccessories[prop].img,this.objOfAccessories[prop].title,this.objOfAccessories[prop].price,this.objOfAccessories[prop].size])
    }
  }
  }
  showJordanProducts(){
    this.arrayForClickedBrand=[];
    this.arrayForBrand=[];
    this.arrayForClickedBrand.push('jordan');
    this.keysOfObjProductsShoes=Object.keys(this.objOfShoes);
    this.keysOfObjProductsClothes=Object.keys(this.objOfClothes);
    for (const prop of this.keysOfObjProductsShoes) {
      if(this.objOfShoes[prop].brand == 'jordan'){
        this.arrayForBrand.push([this.objOfShoes[prop].class,this.objOfShoes[prop].img,this.objOfShoes[prop].title,this.objOfShoes[prop].price,this.objOfShoes[prop].size])
      }
    }
    for (const prop of this.keysOfObjProductsClothes) {
      if(this.objOfClothes[prop].brand == 'jordan'){
        this.arrayForBrand.push([this.objOfClothes[prop].class,this.objOfClothes[prop].img,this.objOfClothes[prop].title,this.objOfClothes[prop].price,this.objOfClothes[prop].size])
      }
    }
    for (const prop of this.keysOfObjProductsAccessories) {
      if(this.objOfAccessories[prop].brand == 'jordan'){
        this.arrayForBrand.push([this.objOfAccessories[prop].class,this.objOfAccessories[prop].img,this.objOfAccessories[prop].title,this.objOfAccessories[prop].price,this.objOfAccessories[prop].size])
      }
    }
  }
  showAdidasProducts(){
    this.arrayForClickedBrand=[];
    this.arrayForBrand=[];
    this.arrayForClickedBrand.push('adidas');
    this.keysOfObjProductsShoes=Object.keys(this.objOfShoes);
    this.keysOfObjProductsClothes=Object.keys(this.objOfClothes);
    for (const prop of this.keysOfObjProductsShoes) {
      if(this.objOfShoes[prop].brand == 'adidas'){
        this.arrayForBrand.push([this.objOfShoes[prop].class,this.objOfShoes[prop].img,this.objOfShoes[prop].title,this.objOfShoes[prop].price,this.objOfShoes[prop].size])
      }
    }
    for (const prop of this.keysOfObjProductsClothes) {
      if(this.objOfClothes[prop].brand == 'adidas'){
        this.arrayForBrand.push([this.objOfClothes[prop].class,this.objOfClothes[prop].img,this.objOfClothes[prop].title,this.objOfClothes[prop].price,this.objOfClothes[prop].size])
      }
    }
    for (const prop of this.keysOfObjProductsAccessories) {
      if(this.objOfAccessories[prop].brand == 'adidas'){
        this.arrayForBrand.push([this.objOfAccessories[prop].class,this.objOfAccessories[prop].img,this.objOfAccessories[prop].title,this.objOfAccessories[prop].price,this.objOfAccessories[prop].size])
      }
    }
  }
  showUnderAProducts(){
    this.arrayForClickedBrand=[];
    this.arrayForBrand=[];
    this.arrayForClickedBrand.push('under armour');
    this.keysOfObjProductsShoes=Object.keys(this.objOfShoes);
    this.keysOfObjProductsClothes=Object.keys(this.objOfClothes);
    for (const prop of this.keysOfObjProductsShoes) {
      if(this.objOfShoes[prop].brand == 'under armour'){
        this.arrayForBrand.push([this.objOfShoes[prop].class,this.objOfShoes[prop].img,this.objOfShoes[prop].title,this.objOfShoes[prop].price,this.objOfShoes[prop].size])
      }
    }
    for (const prop of this.keysOfObjProductsClothes) {
      if(this.objOfClothes[prop].brand == 'under armour'){
        this.arrayForBrand.push([this.objOfClothes[prop].class,this.objOfClothes[prop].img,this.objOfClothes[prop].title,this.objOfClothes[prop].price,this.objOfClothes[prop].size])
      }
    }
    for (const prop of this.keysOfObjProductsAccessories) {
      if(this.objOfAccessories[prop].brand == 'under armour'){
        this.arrayForBrand.push([this.objOfAccessories[prop].class,this.objOfAccessories[prop].img,this.objOfAccessories[prop].title,this.objOfAccessories[prop].price,this.objOfAccessories[prop].size])
      }
    }
  }
  addProductInCart(event) {
    this.products.addProductsInLocalStorage(event);
    this.numOfProdInCart ++;
  }
}
