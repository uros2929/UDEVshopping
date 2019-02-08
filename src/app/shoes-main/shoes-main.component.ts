import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-shoes-main',
  templateUrl: './shoes-main.component.html',
  styleUrls: ['./shoes-main.component.scss']
})
export class ShoesMainComponent implements OnInit {



  cardsObj = {
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
    this.choosenForSearchObj.gender = [];
    this.index = 1;
    this.arrayOfCardAll = [];
    this.choosenForSearchObj.gender.push(event.target.value);
    if (this.choosenForSearchObj.gender[0] == "men") {
      this.returnKeysShowShoesOnGenderChange('men');
    } else if (this.choosenForSearchObj.gender[0] == "women") {
      this.returnKeysShowShoesOnGenderChange('women');
    } else if (this.choosenForSearchObj.gender[0] == "kids") {
      this.returnKeysShowShoesOnGenderChange('kids');
    } else if (this.choosenForSearchObj.gender[0] == "") {
      this.returnKeysShowShoesOnStart(this.index)
    }


  }
  valueFromFormSize(event) {
    this.index = 1;
    this.getSizeOfShose(event);
    this.makeArrayForShowSize();
    this.disableRadioBtns(event,true)  // MUST DO THIS, I NEED TO FIND BUG :/
  }

  valueFromFormBrands(event) {
    this.choosenForSearchObj.brands = []
    for (let index = 0; index < event.target.form.length; index++) {
      if (event.target.form[index].checked == true) {
        this.choosenForSearchObj.brands.push(event.target.form[index].value)

      }
    }
    console.log(this.choosenForSearchObj)
  }






  returnKeysShowShoesOnStart(index) {
    this.arrayKeysOfCards = Object.keys(this.cardsObj);
    if (this.choosenForSearchObj.gender[0] == undefined || this.choosenForSearchObj.gender[0] == "") {
      for (const prop of this.arrayKeysOfCards) {
        this.arrayOfCardAll.push([this.cardsObj[prop].class + index, this.cardsObj[prop].img, this.cardsObj[prop].title, this.cardsObj[prop].price, this.cardsObj[prop].gender, this.cardsObj[prop].brand, this.cardsObj[prop].size]);
        index++
      }
    }
  }

  returnKeysShowShoesOnGenderChange(gender) {
    this.arrayKeysOfCards = Object.keys(this.cardsObj);
    for (const prop of this.arrayKeysOfCards) {
      if (this.cardsObj[prop].gender == gender) {
        this.arrayOfCardAll.push([this.cardsObj[prop].class + this.index, this.cardsObj[prop].img, this.cardsObj[prop].title, this.cardsObj[prop].price, this.cardsObj[prop].gender, this.cardsObj[prop].brand, this.cardsObj[prop].size]);
        this.index++;
      }

    }
  }

  getSizeOfShose(event) {
    this.choosenForSearchObj.size = [];
    for (let index = 0; index < event.target.form.length; index++) {
      if (event.target.form[index].checked == true) {
        this.choosenForSearchObj.size.push(event.target.form[index].value)
      }
    }
    console.log(this.choosenForSearchObj.size)
  }
  makeArrayForShowSize() {
    for (let index = 0; index < this.arrayOfCardAll.length; index++) {
      if (this.arrayOfCardAll[index][6].includes(this.choosenForSearchObj.size) == true) {
        this.arrayForShowSize.push(this.arrayOfCardAll[index])
      }
    }
    for (let index = 0; index < this.arrayForShowSize.length; index++) {
      this.arrayForShowSize[index][0] = "card" + this.index;
      this.index++

    }
    this.arrayOfCardAll = this.arrayForShowSize;
  }
  disableRadioBtns(event,disableValue) {
    let allFormBtns = event.target.form;
    for (let index = 0; index < allFormBtns.length; index++) {
      allFormBtns[index].disabled = disableValue;
    }
  }

  resetSearch(){
    this.arrayKeysOfCards = [];
    this.arrayOfCardAll = [];
    this.arrayForShowSize = [];
    this.index = 1;
    this.choosenForSearchObj = {
      gender: [],
      size: [],
      brands: []
    }
    console.log(  document.getElementById('chooseSize'))
    this.returnKeysShowShoesOnStart(this.index);
    for (let index = 0; index < 28; index++) {
      document.getElementById('chooseSize')[index].disabled=false;
      document.getElementById('chooseSize')[index].checked=false;      // MUST DO THIS, I NEED TO FIND BUG :/
    }
  }
}


