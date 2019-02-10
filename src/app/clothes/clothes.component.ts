import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})
export class ClothesComponent implements OnInit {


  cardObjClothes = {
    card1: {
      class: "card",
      img: './assets/clothesAssets/nike-men1.jpg',
      title: "NIKE MEN",
      price: "80$",
      gender: "men",
      brand: 'nike',
      size: 'L,XL,XXL'
    },
    card2: {
      class: "card",
      img: './assets/clothesAssets/nike-men2.jpg',
      title: "NIKE MEN",
      price: "90$",
      gender: "men",
      brand: 'nike',
      size: 'M,L,XL,XXL'
    },
    card3: {
      class: "card",
      img: './assets/clothesAssets/nike-men3.jpg',
      title: "NIKE MEN",
      price: "100$",
      gender: "men",
      brand: 'nike',
      size: 'M,L,XL,XXL'
    },
    card4: {
      class: "card",
      img: './assets/clothesAssets/addidas-men1.jpg',
      title: "ADDIDAS MEN",
      price: "50$",
      gender: "men",
      brand: 'addidas',
      size: 'M,L,XL'
    },
    card5: {
      class: "card",
      img: './assets/clothesAssets/addidas-men2.jpg',
      title: "ADDIDAS MEN",
      price: "60$",
      gender: "men",
      brand: 'addidas',
      size: 'M,L,XL'
    },
    card6: {
      class: "card",
      img: './assets/clothesAssets/addidas-men3.jpg',
      title: "ADDIDAS MEN",
      price: "50$",
      gender: "men",
      brand: 'addidas',
      size: 'S,M,L,XL'
    },
    card7: {
      class: "card",
      img: './assets/clothesAssets/underA-men1.jpg',
      title: "UNDER ARMOUR MEN",
      price: "50$",
      gender: "men",
      brand: 'under armour',
      size: 'S,M,L,XL'
    },
    card8: {
      class: "card",
      img: './assets/clothesAssets/underA-men2.jpg',
      title: "UNDER ARMOUR MEN",
      price: "40$",
      gender: "men",
      brand: 'under armour',
      size: 'S,M,L,XL'
    },
    card9: {
      class: "card",
      img: './assets/clothesAssets/underA-women1.jpg',
      title: "UNDER ARMOUR WOMEN",
      price: "40$",
      gender: "women",
      brand: 'under armour',
      size: 'XS,S,M,L'
    },
    card10: {
      class: "card",
      img: './assets/clothesAssets/underA-women2.jpg',
      title: "UNDER ARMOUR WOMEN",
      price: "70$",
      gender: "women",
      brand: 'under armour',
      size: 'XS,S,M,L'
    },
    card11: {
      class: "card",
      img: './assets/clothesAssets/underA-women3.jpg',
      title: "UNDER ARMOUR WOMEN",
      price: "65$",
      gender: "women",
      brand: 'under armour',
      size: 'XS,S,M,L'
    },
    card12: {
      class: "card",
      img: './assets/clothesAssets/nike-kids1.jpg',
      title: "NIKE KIDS",
      price: "35$",
      gender: "kids",
      brand: 'nike',
      size: 'XS,S,M'
    }


  }

  arrayKeysOfCards = [];
  arrayOfCardAll = [];
  index = 1;

  choosenForSearchObj = {
    gender: [],
    size: [],
    brands: []
  }
  constructor() { }

  ngOnInit() {
    this.returnKeysShowClothesOnStart(this.index);
  }

  returnKeysShowClothesOnStart(index) {
    this.arrayKeysOfCards = Object.keys(this.cardObjClothes);
    for (const prop of this.arrayKeysOfCards) {
      this.arrayOfCardAll.push([this.cardObjClothes[prop].class + index, this.cardObjClothes[prop].img, this.cardObjClothes[prop].title, this.cardObjClothes[prop].price, this.cardObjClothes[prop].gender, this.cardObjClothes[prop].brand, this.cardObjClothes[prop].size]);
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
      this.returnKeysShowClothesOnStart(this.index);
    }else{
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
    this.arrayKeysOfCards = Object.keys(this.cardObjClothes);
    if (this.choosenForSearchObj.brands[0] == undefined && this.choosenForSearchObj.size[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardObjClothes[prop].gender == gender) {
          this.arrayOfCardAll.push([this.cardObjClothes[prop].class + this.index, this.cardObjClothes[prop].img, this.cardObjClothes[prop].title, this.cardObjClothes[prop].price, this.cardObjClothes[prop].gender, this.cardObjClothes[prop].brand, this.cardObjClothes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.brands[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardObjClothes[prop].gender == gender && this.cardObjClothes[prop].brand == valueOfBrand) {
          this.arrayOfCardAll.push([this.cardObjClothes[prop].class + this.index, this.cardObjClothes[prop].img, this.cardObjClothes[prop].title, this.cardObjClothes[prop].price, this.cardObjClothes[prop].gender, this.cardObjClothes[prop].brand, this.cardObjClothes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.size[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardObjClothes[prop].gender == gender && this.cardObjClothes[prop].size.includes(valueOfSize)) {
          this.arrayOfCardAll.push([this.cardObjClothes[prop].class + this.index, this.cardObjClothes[prop].img, this.cardObjClothes[prop].title, this.cardObjClothes[prop].price, this.cardObjClothes[prop].gender, this.cardObjClothes[prop].brand, this.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }
  }
  onBrandChange(brand) {
    let valueOfGender = this.choosenForSearchObj.gender[0],
      valueOfSize = this.choosenForSearchObj.size[0];
    this.arrayKeysOfCards = Object.keys(this.cardObjClothes);
    if (this.choosenForSearchObj.gender[0] == undefined && this.choosenForSearchObj.size[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardObjClothes[prop].brand == brand) {
          this.arrayOfCardAll.push([this.cardObjClothes[prop].class + this.index, this.cardObjClothes[prop].img, this.cardObjClothes[prop].title, this.cardObjClothes[prop].price, this.cardObjClothes[prop].gender, this.cardObjClothes[prop].brand, this.cardObjClothes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.gender[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardObjClothes[prop].brand == brand && this.cardObjClothes[prop].gender == valueOfGender) {
          this.arrayOfCardAll.push([this.cardObjClothes[prop].class + this.index, this.cardObjClothes[prop].img, this.cardObjClothes[prop].title, this.cardObjClothes[prop].price, this.cardObjClothes[prop].gender, this.cardObjClothes[prop].brand, this.cardObjClothes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.size[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardObjClothes[prop].brand == brand && this.cardObjClothes[prop].size.includes(valueOfSize)) {
          this.arrayOfCardAll.push([this.cardObjClothes[prop].class + this.index, this.cardObjClothes[prop].img, this.cardObjClothes[prop].title, this.cardObjClothes[prop].price, this.cardObjClothes[prop].gender, this.cardObjClothes[prop].brand, this.cardObjClothes[prop].size]);
          this.index++
        }
      }
    }
  }
  onSizeChange(size) {
    let valueOfGender = this.choosenForSearchObj.gender[0],
      valueOfBrand = this.choosenForSearchObj.brands[0];
    this.arrayKeysOfCards = Object.keys(this.cardObjClothes);
    if (this.choosenForSearchObj.brands[0] == undefined && this.choosenForSearchObj.gender[0] == undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardObjClothes[prop].size.includes(size) == true) {
          this.arrayOfCardAll.push([this.cardObjClothes[prop].class + this.index, this.cardObjClothes[prop].img, this.cardObjClothes[prop].title, this.cardObjClothes[prop].price, this.cardObjClothes[prop].gender, this.cardObjClothes[prop].brand, this.cardObjClothes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.brands[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardObjClothes[prop].size.includes(size) == true && this.cardObjClothes[prop].brand == valueOfBrand) {
          this.arrayOfCardAll.push([this.cardObjClothes[prop].class + this.index, this.cardObjClothes[prop].img, this.cardObjClothes[prop].title, this.cardObjClothes[prop].price, this.cardObjClothes[prop].gender, this.cardObjClothes[prop].brand, this.cardObjClothes[prop].size]);
          this.index++
        }
      }
    } else if (this.choosenForSearchObj.gender[0] != undefined) {
      for (const prop of this.arrayKeysOfCards) {
        if (this.cardObjClothes[prop].size.includes(size) == true && this.cardObjClothes[prop].gender == valueOfGender) {
          this.arrayOfCardAll.push([this.cardObjClothes[prop].class + this.index, this.cardObjClothes[prop].img, this.cardObjClothes[prop].title, this.cardObjClothes[prop].price, this.cardObjClothes[prop].gender, this.cardObjClothes[prop].brand, this.cardObjClothes[prop].size]);
          this.index++
        }
      }
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
