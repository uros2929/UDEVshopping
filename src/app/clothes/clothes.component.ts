import { Component, OnInit } from '@angular/core';
import { ProductsObjectsService } from '../products-objects.service';
import { ModalsForResponsiveService } from '../modals-for-responsive.service';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {


  constructor(private products:ProductsObjectsService,private modalsResponsive:ModalsForResponsiveService) { }


  numOfProdInCart=this.products.getNumOfProductsInCart;
  arrayKeysOfCards = [];
  arrayOfCardAll = [];
  index = 1;

  choosenForSearchObj = {
    gender: [],
    size: [],
    brands: []
  }

  ngOnInit() {
    this.returnKeysShowClothesOnStart(this.index);
    this.numOfProdInCart=Object.keys(this.products.getProductsFromLocal).length;
  }

  returnKeysShowClothesOnStart(index) {
    this.arrayKeysOfCards = Object.keys(this.products.cardObjClothes);
    for (const prop of this.arrayKeysOfCards) {
      this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
      index++
    }
  }

  valueFromSelectListGender(event) {
    let valueOfSelectList = event.target.value;
    this.choosenForSearchObj.gender = [];
    this.index = 1;
    this.arrayOfCardAll = [];
    this.choosenForSearchObj.gender.push(valueOfSelectList);
    if (valueOfSelectList == 'all') {
      this.resetSearch();
    } else {
      this.onGenderChanage(valueOfSelectList)
    }
  }
  valueFromBrands(event) {
    let valueOfBrand = event.target.value;
    this.choosenForSearchObj.brands = [];
    this.index = 1;
    this.arrayOfCardAll = [];
    this.choosenForSearchObj.brands.push(valueOfBrand)
    this.onBrandChange(valueOfBrand)
  }
  valueFromSize(event) {
    let valueOfSize = event.target.value;
    this.choosenForSearchObj.size = [];
    this.index = 1;
    this.arrayOfCardAll = [];
    this.choosenForSearchObj.size.push(valueOfSize)
    this.onSizeChange(valueOfSize)
  }



  onGenderChanage(gender) {
    let valueOfSize = this.choosenForSearchObj.size[0],
        valueOfBrand = this.choosenForSearchObj.brands[0];
    this.arrayKeysOfCards = Object.keys(this.products.cardObjClothes);
    if (this.choosenForSearchObj.brands[0] == undefined && this.choosenForSearchObj.size[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].gender == gender) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }else if(this.choosenForSearchObj.brands[0] != undefined && this.choosenForSearchObj.size[0] != undefined){
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].gender == gender && this.products.cardObjClothes[prop].size.includes(valueOfSize) && this.products.cardObjClothes[prop].brand==valueOfBrand) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }else if (this.choosenForSearchObj.brands[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].gender == gender && this.products.cardObjClothes[prop].brand == valueOfBrand) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }else if (this.choosenForSearchObj.size[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].gender == gender && this.products.cardObjClothes[prop].size.includes(valueOfSize)) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }
    this.noProductInStock()
  }
  onBrandChange(brand) {
    let valueOfGender = this.choosenForSearchObj.gender[0],
        valueOfSize = this.choosenForSearchObj.size[0];
    this.arrayKeysOfCards = Object.keys(this.products.cardObjClothes);
    if (this.choosenForSearchObj.gender[0] == undefined && this.choosenForSearchObj.size[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].brand == brand) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }else if(this.choosenForSearchObj.gender[0] != undefined && this.choosenForSearchObj.size[0] != undefined){
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].gender == valueOfGender && this.products.cardObjClothes[prop].size.includes(valueOfSize) && this.products.cardObjClothes[prop].brand==brand) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }else if (this.choosenForSearchObj.gender[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].brand == brand && this.products.cardObjClothes[prop].gender == valueOfGender) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }else if (this.choosenForSearchObj.size[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].brand == brand && this.products.cardObjClothes[prop].size.includes(valueOfSize)) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }
    this.noProductInStock()
  }
  onSizeChange(size) {
    let valueOfGender = this.choosenForSearchObj.gender[0],
        valueOfBrand = this.choosenForSearchObj.brands[0];
    this.arrayKeysOfCards = Object.keys(this.products.cardObjClothes);
    if (this.choosenForSearchObj.brands[0] == undefined && this.choosenForSearchObj.gender[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].size.includes(size) == true) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }else if(this.choosenForSearchObj.brands[0] != undefined && this.choosenForSearchObj.gender[0] != undefined){
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].gender == valueOfGender && this.products.cardObjClothes[prop].size.includes(size) && this.products.cardObjClothes[prop].brand==valueOfBrand) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }else if (this.choosenForSearchObj.brands[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].size.includes(size) == true && this.products.cardObjClothes[prop].brand == valueOfBrand) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }else if (this.choosenForSearchObj.gender[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardObjClothes[prop].size.includes(size) == true && this.products.cardObjClothes[prop].gender == valueOfGender) {
          this.arrayOfCardAll.push([this.products.cardObjClothes[prop].class + this.index, this.products.cardObjClothes[prop].img, this.products.cardObjClothes[prop].title, this.products.cardObjClothes[prop].price, this.products.cardObjClothes[prop].gender, this.products.cardObjClothes[prop].brand, this.products.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }
    this.noProductInStock()
  }

  noProductInStock(){
    let noInStock=document.getElementById('messageNoInStock');
      if (this.arrayOfCardAll[0]==undefined) {
        noInStock.style.display='block'
      }else{
        noInStock.style.display='none'
      }
    }
  resetSearch() {
    this.arrayKeysOfCards = [];
    this.arrayOfCardAll = [];
    this.index = 1;
    this.choosenForSearchObj = {
      gender: [],
      size: [],
      brands: []
    }
    this.returnKeysShowClothesOnStart(this.index);
    this.resetForms();
    document.getElementById('messageNoInStock').style.display='none';
  }
  resetForms() {
    let formBrandLenght = document.getElementsByTagName('form')[0].length,
      formSizeLenght = document.getElementsByTagName('form')[1].length;
    for (let index = 0; index < formSizeLenght; index++) {
      document.getElementById('chooseSize')[index].checked = false;
    }
    for (let index = 0; index < formBrandLenght; index++) {
      document.getElementById('chooseBrand')[index].checked = false;
    }

  }
  addProductInCart(event) {
    this.products.addProductsInLocalStorage(event);
    this.numOfProdInCart ++;
  }

}
