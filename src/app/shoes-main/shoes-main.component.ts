import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-shoes-main',
  templateUrl: './shoes-main.component.html',
  styleUrls: ['./shoes-main.component.scss']
})
export class ShoesMainComponent implements OnInit {

  @ViewChild('shoesShop') shoesShop;

  cardsObj = {
    card1: {
      class: "card1",
      img: './assets/shoesAssets/Nike-Air-Max-97.jpg ',
      title: "AIR MAX 97",
      price: "80$",
      gender:"men",
      brand:'nike'
    },
    card2: {
      class: "card2",
      img: './assets/shoesAssets/Air-Jordan-11-Concord-2018.jpg ',
      title: "AIR JORDAN 11 CONCORD",
      price: "100$",
      gender:"men",
      brand:'jordan'
    },
    card3: {
      class: "card3",
      img: './assets/shoesAssets/under-armour-charged-bandit-2_men.jpg' ,
      title: "UNDER ARMOUR CHARGED BANDIT 2",
      price: "75$",
      gender:"women",
      brand:'under armour'
    },
    card4: {
      class: "card4",
      img: './assets/shoesAssets/Adidas_EQT-support-ADV_Black_Turbo_Red-1.jpg',
      title: "ADDIDAS EQT",
      price: "125$",
      gender:"men",
      brand:"addidas"
    },
    card5: {
      class: "card5",
      img: './assets/shoesAssets/jordan-kids.jpg',
      title: "JORDAN KIDS",
      price: "50$",
      gender:"kids",
      brand:"jordan"
    }
    
  }

  arrayKeysOfCards=[];
  arrayOfCardAll=[];


  choosenForSearchObj = {
    gender: [],
    size: [],
    brands: []
  }
  constructor(private sanitizer:DomSanitizer) { }

  ngOnInit() {
  
   this.returnKeys(); 
  
  }

  valueFromSelectListGender(event) {
    this.choosenForSearchObj.gender = [];
    this.choosenForSearchObj.gender.push(event.target.value);
    
  }
  valueFromFormSize(event) {
    this.choosenForSearchObj.size = [];
    for (let index = 0; index < event.target.form.length; index++) {
      if (event.target.form[index].checked == true) {
        this.choosenForSearchObj.size.push(event.target.form[index].value)
      }
    }
    console.log(this.choosenForSearchObj)
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

  returnKeys(){
    this.arrayKeysOfCards=Object.keys(this.cardsObj);
    for (const prop of this.arrayKeysOfCards) {
      this.arrayOfCardAll.push([this.cardsObj[prop].class,this.cardsObj[prop].img,this.cardsObj[prop].title,this.cardsObj[prop].price]);
    }
  }

}



