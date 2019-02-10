import { Component, OnInit } from '@angular/core';
import { ProductsObjectsService } from '../products-objects.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.scss']
})
export class AccessoriesComponent implements OnInit {

  constructor(private objOfAccessories:ProductsObjectsService) { }


  objAccessories=this.objOfAccessories.cardObjAccessories;

  arrayOfKeysFromObj=[];
  arrayForAccessories=[];
  ngOnInit() {
   this.showProductsForAccessories();
  }

  showProductsForAccessories(){
    this.arrayOfKeysFromObj=Object.keys(this.objAccessories);
    for (const prop of this.arrayOfKeysFromObj) {
      this.arrayForAccessories.push([this.objAccessories[prop].class,this.objAccessories[prop].img,this.objAccessories[prop].title,this.objAccessories[prop].price,this.objAccessories[prop].brand,this.objAccessories[prop].accessories])
    }
  }

showBags(){
  this.arrayForAccessories=[];
  this.arrayOfKeysFromObj=Object.keys(this.objAccessories);
  for (const prop of this.arrayOfKeysFromObj) {
    if (this.objAccessories[prop].accessories == 'bag') {
      this.arrayForAccessories.push([this.objAccessories[prop].class,this.objAccessories[prop].img,this.objAccessories[prop].title,this.objAccessories[prop].price,this.objAccessories[prop].brand,this.objAccessories[prop].accessories])
    }
  }
}
showCaps(){
  this.arrayForAccessories=[];
  this.arrayOfKeysFromObj=Object.keys(this.objAccessories);
  for (const prop of this.arrayOfKeysFromObj) {
    if (this.objAccessories[prop].accessories == 'cap') {
      this.arrayForAccessories.push([this.objAccessories[prop].class,this.objAccessories[prop].img,this.objAccessories[prop].title,this.objAccessories[prop].price,this.objAccessories[prop].brand,this.objAccessories[prop].accessories])
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
}
