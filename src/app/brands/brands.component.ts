import { Component, OnInit } from '@angular/core';
import { ProductsObjectsService } from '../products-objects.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  
  constructor(private productsObjects:ProductsObjectsService) { }

  objOfShoes=this.productsObjects.cardsObjShoes;
  objOfClothes=this.productsObjects.cardObjClothes;
  objOfAccessories=this.productsObjects.cardObjAccessories;

  index=1;
  arrayForClickedBrand=[];
  keysOfObjProductsShoes=[];
  keysOfObjProductsClothes=[];
  keysOfObjProductsAccessories=[];
  arrayForBrand=[];

  ngOnInit() {
   
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
      this.arrayForBrand.push([this.objOfShoes[prop].class,this.objOfShoes[prop].img,this.objOfShoes[prop].title,this.objOfShoes[prop].price])
    }
  }
  for (const prop of this.keysOfObjProductsClothes) {
    if(this.objOfClothes[prop].brand == 'nike'){
      this.arrayForBrand.push([this.objOfClothes[prop].class,this.objOfClothes[prop].img,this.objOfClothes[prop].title,this.objOfClothes[prop].price])
    }
  }
  for (const prop of this.keysOfObjProductsAccessories) {
    if(this.objOfAccessories[prop].brand == 'nike'){
      this.arrayForBrand.push([this.objOfAccessories[prop].class,this.objOfAccessories[prop].img,this.objOfAccessories[prop].title,this.objOfAccessories[prop].price])
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
        this.arrayForBrand.push([this.objOfShoes[prop].class,this.objOfShoes[prop].img,this.objOfShoes[prop].title,this.objOfShoes[prop].price])
      }
    }
    for (const prop of this.keysOfObjProductsClothes) {
      if(this.objOfClothes[prop].brand == 'jordan'){
        this.arrayForBrand.push([this.objOfClothes[prop].class,this.objOfClothes[prop].img,this.objOfClothes[prop].title,this.objOfClothes[prop].price])
      }
    }
    for (const prop of this.keysOfObjProductsAccessories) {
      if(this.objOfAccessories[prop].brand == 'jordan'){
        this.arrayForBrand.push([this.objOfAccessories[prop].class,this.objOfAccessories[prop].img,this.objOfAccessories[prop].title,this.objOfAccessories[prop].price])
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
        this.arrayForBrand.push([this.objOfShoes[prop].class,this.objOfShoes[prop].img,this.objOfShoes[prop].title,this.objOfShoes[prop].price])
      }
    }
    for (const prop of this.keysOfObjProductsClothes) {
      if(this.objOfClothes[prop].brand == 'adidas'){
        this.arrayForBrand.push([this.objOfClothes[prop].class,this.objOfClothes[prop].img,this.objOfClothes[prop].title,this.objOfClothes[prop].price])
      }
    }
    for (const prop of this.keysOfObjProductsAccessories) {
      if(this.objOfAccessories[prop].brand == 'adidas'){
        this.arrayForBrand.push([this.objOfAccessories[prop].class,this.objOfAccessories[prop].img,this.objOfAccessories[prop].title,this.objOfAccessories[prop].price])
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
        this.arrayForBrand.push([this.objOfShoes[prop].class,this.objOfShoes[prop].img,this.objOfShoes[prop].title,this.objOfShoes[prop].price])
      }
    }
    for (const prop of this.keysOfObjProductsClothes) {
      if(this.objOfClothes[prop].brand == 'under armour'){
        this.arrayForBrand.push([this.objOfClothes[prop].class,this.objOfClothes[prop].img,this.objOfClothes[prop].title,this.objOfClothes[prop].price])
      }
    }
    for (const prop of this.keysOfObjProductsAccessories) {
      if(this.objOfAccessories[prop].brand == 'under armour'){
        this.arrayForBrand.push([this.objOfAccessories[prop].class,this.objOfAccessories[prop].img,this.objOfAccessories[prop].title,this.objOfAccessories[prop].price])
      }
    }
  }
  addProductInCart(event) {
    this.productsObjects.addProductsInLocalStorage(event)
  }
}
