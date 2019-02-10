import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-shoes-main',
  templateUrl: './shoes-main.component.html',
  styleUrls: ['./shoes-main.component.scss']
})
export class ShoesMainComponent implements OnInit {



  cardsObjShoes = {
    card1: {
      class: "card",
      img: './assets/shoesAssets/Nike-Air-Max-97.jpg ',
      title: "AIR MAX 97",
      price: "80$",
      gender: "men",
      brand: 'nike',
      size: '40,41,43,45'
    },
    card2: {
      class: "card",
      img: './assets/shoesAssets/Air-Jordan-11-Concord-2018.jpg ',
      title: "AIR JORDAN 11 CONCORD",
      price: "100$",
      gender: "men",
      brand: 'jordan',
      size: '40,41,42,43,45,45.5,46'
    },
    card3: {
      class: "card",
      img: './assets/shoesAssets/under-armour-charged-bandit-2_men.jpg',
      title: "UNDER ARMOUR CHARGED BANDIT 2",
      price: "75$",
      gender: "women",
      brand: 'under armour',
      size: '35,35.5,36,36.5,37,38'
    },
    card4: {
      class: "card",
      img: './assets/shoesAssets/Adidas_EQT-support-ADV_Black_Turbo_Red-1.jpg',
      title: "ADDIDAS EQT",
      price: "125$",
      gender: "men",
      brand: "addidas",
      size: '43,45,45.5,46'
    },
    card5: {
      class: "card",
      img: './assets/shoesAssets/jordan-kids.jpg',
      title: "JORDAN KIDS",
      price: "50$",
      gender: "kids",
      brand: "jordan",
      size: '30,31,32,33,34,35'
    },
    card6: {
      class: "card",
      img: './assets/shoesAssets/JordanW.jpg',
      title: "JORDAN 13 WOMEN",
      price: "115$",
      gender: "women",
      brand: "jordan",
      size: "36.5,37,38"
    }
  }

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
  constructor() { }

  ngOnInit() {
    this.returnKeysShowShoesOnStart(this.index);
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
    this.arrayKeysOfCards = Object.keys(this.cardsObjShoes);
    for (const prop of this.arrayKeysOfCards) {
      this.arrayOfCardAll.push([this.cardsObjShoes[prop].class + index, this.cardsObjShoes[prop].img, this.cardsObjShoes[prop].title, this.cardsObjShoes[prop].price, this.cardsObjShoes[prop].gender, this.cardsObjShoes[prop].brand, this.cardsObjShoes[prop].size]);
      index++
    }
  }

  onGenderChange(gender) {
    let valueOfSize = this.choosenForSearchObj.size[0],
      valueOfBrand = this.choosenForSearchObj.brands[0];
    this.arrayKeysOfCards = Object.keys(this.cardsObjShoes);
    if (this.choosenForSearchObj.brands[0] == undefined && this.choosenForSearchObj.size[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardsObjShoes[prop].gender == gender) {
          this.arrayOfCardAll.push([this.cardsObjShoes[prop].class + this.index, this.cardsObjShoes[prop].img, this.cardsObjShoes[prop].title, this.cardsObjShoes[prop].price, this.cardsObjShoes[prop].gender, this.cardsObjShoes[prop].brand, this.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.brands[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardsObjShoes[prop].gender == gender && this.cardsObjShoes[prop].brand == valueOfBrand) {
          this.arrayOfCardAll.push([this.cardsObjShoes[prop].class + this.index, this.cardsObjShoes[prop].img, this.cardsObjShoes[prop].title, this.cardsObjShoes[prop].price, this.cardsObjShoes[prop].gender, this.cardsObjShoes[prop].brand, this.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.size[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardsObjShoes[prop].gender == gender && this.cardsObjShoes[prop].size.includes(valueOfSize)) {
          this.arrayOfCardAll.push([this.cardsObjShoes[prop].class + this.index, this.cardsObjShoes[prop].img, this.cardsObjShoes[prop].title, this.cardsObjShoes[prop].price, this.cardsObjShoes[prop].gender, this.cardsObjShoes[prop].brand, this.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    }
  }

  onBrandChange(brand) {
    let valueOfGender = this.choosenForSearchObj.gender[0],
      valueOfSize = this.choosenForSearchObj.size[0];
    this.arrayKeysOfCards = Object.keys(this.cardsObjShoes);
    if (this.choosenForSearchObj.gender[0] == undefined && this.choosenForSearchObj.size[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardsObjShoes[prop].brand == brand) {
          this.arrayOfCardAll.push([this.cardsObjShoes[prop].class + this.index, this.cardsObjShoes[prop].img, this.cardsObjShoes[prop].title, this.cardsObjShoes[prop].price, this.cardsObjShoes[prop].gender, this.cardsObjShoes[prop].brand, this.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.gender[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardsObjShoes[prop].brand == brand && this.cardsObjShoes[prop].gender == valueOfGender) {
          this.arrayOfCardAll.push([this.cardsObjShoes[prop].class + this.index, this.cardsObjShoes[prop].img, this.cardsObjShoes[prop].title, this.cardsObjShoes[prop].price, this.cardsObjShoes[prop].gender, this.cardsObjShoes[prop].brand, this.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.size[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardsObjShoes[prop].brand == brand && this.cardsObjShoes[prop].size.includes(valueOfSize)) {
          this.arrayOfCardAll.push([this.cardsObjShoes[prop].class + this.index, this.cardsObjShoes[prop].img, this.cardsObjShoes[prop].title, this.cardsObjShoes[prop].price, this.cardsObjShoes[prop].gender, this.cardsObjShoes[prop].brand, this.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    }
  }

  onSizeChange(size) {
    let valueOfGender = this.choosenForSearchObj.gender[0],
      valueOfBrand = this.choosenForSearchObj.brands[0];
    this.arrayKeysOfCards = Object.keys(this.cardsObjShoes);
    if (this.choosenForSearchObj.brands[0] == undefined && this.choosenForSearchObj.gender[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardsObjShoes[prop].size.includes(size) == true) {
          this.arrayOfCardAll.push([this.cardsObjShoes[prop].class + this.index, this.cardsObjShoes[prop].img, this.cardsObjShoes[prop].title, this.cardsObjShoes[prop].price, this.cardsObjShoes[prop].gender, this.cardsObjShoes[prop].brand, this.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.brands[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardsObjShoes[prop].size.includes(size) == true && this.cardsObjShoes[prop].brand == valueOfBrand) {
          this.arrayOfCardAll.push([this.cardsObjShoes[prop].class + this.index, this.cardsObjShoes[prop].img, this.cardsObjShoes[prop].title, this.cardsObjShoes[prop].price, this.cardsObjShoes[prop].gender, this.cardsObjShoes[prop].brand, this.cardsObjShoes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.gender[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardsObjShoes[prop].size.includes(size) == true && this.cardsObjShoes[prop].gender == valueOfGender) {
          this.arrayOfCardAll.push([this.cardsObjShoes[prop].class + this.index, this.cardsObjShoes[prop].img, this.cardsObjShoes[prop].title, this.cardsObjShoes[prop].price, this.cardsObjShoes[prop].gender, this.cardsObjShoes[prop].brand, this.cardsObjShoes[prop].size]);
          this.index++
        }
      }
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
}


