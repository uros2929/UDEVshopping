import { Component, OnInit } from '@angular/core';
import { ProductsObjectsService } from '../products-objects.service';
import { ModalsForResponsiveService } from '../modals-for-responsive.service';



@Component({
  selector: 'app-shoes-main',
  templateUrl: './shoes-main.component.html',
  styleUrls: ['./shoes-main.component.scss']
})
export class ShoesMainComponent implements OnInit {


  constructor(private products: ProductsObjectsService, private modalsResponsive:ModalsForResponsiveService) { }

  numOfProdInCart=this.products.getNumOfProductsInCart;
  arrayKeysOfCards = [];
  arrayOfCardAll = [];
  arrayForShowBrands = [];
  arrayForShowSize = [];
  index = 1;

  choosenForSearchObj = {
    gender: [],
    size: [],
    brands: []
  }

  ngOnInit() {
    this.returnKeysShowShoesOnStart(this.index);
    this.numOfProdInCart=Object.keys(this.products.getProductsFromLocal).length;
  }


  valueFromSelectListGender(event) {
    let valueOfSelectList = event.target.value;
    this.choosenForSearchObj.gender = [];
    this.index = 1;
    this.arrayOfCardAll = [];
    this.choosenForSearchObj.gender.push(valueOfSelectList);
    if (this.choosenForSearchObj.gender[0] == "") {
      this.returnKeysShowShoesOnStart(this.index);
    } else {
      this.onGenderChange(valueOfSelectList);
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







  returnKeysShowShoesOnStart(index) {
    this.arrayKeysOfCards = Object.keys(this.products.cardsObjShoes);
    for (const prop of this.arrayKeysOfCards) {
      this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
      index++
    }
    
  }

  onGenderChange(gender) {
    let valueOfSize = this.choosenForSearchObj.size[0],
      valueOfBrand = this.choosenForSearchObj.brands[0];
    this.arrayKeysOfCards = Object.keys(this.products.cardsObjShoes);
    if (this.choosenForSearchObj.brands[0] == undefined && this.choosenForSearchObj.size[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].gender == gender) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.brands[0] != undefined && this.choosenForSearchObj.size[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].gender == gender && this.products.cardsObjShoes[prop].size.includes(valueOfSize) && this.products.cardsObjShoes[prop].brand == valueOfBrand) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.brands[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].gender == gender && this.products.cardsObjShoes[prop].brand == valueOfBrand) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.size[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].gender == gender && this.products.cardsObjShoes[prop].size.includes(valueOfSize)) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    }
    this.noProductInStock()
  }

  onBrandChange(brand) {
    let valueOfGender = this.choosenForSearchObj.gender[0],
      valueOfSize = this.choosenForSearchObj.size[0];
    this.arrayKeysOfCards = Object.keys(this.products.cardsObjShoes);
    if (this.choosenForSearchObj.gender[0] == undefined && this.choosenForSearchObj.size[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].brand == brand) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.gender[0] != undefined && this.choosenForSearchObj.size[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].gender == valueOfGender && this.products.cardsObjShoes[prop].size.includes(valueOfSize) && this.products.cardsObjShoes[prop].brand == brand) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.gender[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].brand == brand && this.products.cardsObjShoes[prop].gender == valueOfGender) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.size[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].brand == brand && this.products.cardsObjShoes[prop].size.includes(valueOfSize)) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    }
    this.noProductInStock()
  }

  onSizeChange(size) {
    let valueOfGender = this.choosenForSearchObj.gender[0],
      valueOfBrand = this.choosenForSearchObj.brands[0];
    this.arrayKeysOfCards = Object.keys(this.products.cardsObjShoes);
    if (this.choosenForSearchObj.brands[0] == undefined && this.choosenForSearchObj.gender[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].size.includes(size) == true) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.brands[0] != undefined && this.choosenForSearchObj.gender[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].gender == valueOfGender && this.products.cardsObjShoes[prop].size.includes(size) && this.products.cardsObjShoes[prop].brand == valueOfBrand) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.brands[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].size.includes(size) == true && this.products.cardsObjShoes[prop].brand == valueOfBrand) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.gender[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.products.cardsObjShoes[prop].size.includes(size) == true && this.products.cardsObjShoes[prop].gender == valueOfGender) {
          this.arrayOfCardAll.push([this.products.cardsObjShoes[prop].class + this.index, this.products.cardsObjShoes[prop].img, this.products.cardsObjShoes[prop].title, this.products.cardsObjShoes[prop].price, this.products.cardsObjShoes[prop].gender, this.products.cardsObjShoes[prop].brand, this.products.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    }
    this.noProductInStock()
  }


  noProductInStock() {
    let noInStock = document.getElementById('messageNoInStock');
    if (this.arrayOfCardAll[0] == undefined) {
      noInStock.style.display = 'block'
    } else {
      noInStock.style.display = 'none'
    }
  }

  resetSearch() {
    this.arrayKeysOfCards = [];
    this.arrayOfCardAll = [];
    this.arrayForShowSize = [];
    this.index = 1;
    this.choosenForSearchObj = {
      gender: [],
      size: [],
      brands: []
    }
    this.returnKeysShowShoesOnStart(this.index);
    this.resetForms();
    document.getElementById('messageNoInStock').style.display = 'none';
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
