import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsObjectsService {

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
      title: "ADIDAS EQT",
      price: "125$",
      gender: "men",
      brand: "adidas",
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
      img: './assets/clothesAssets/adidas-men1.jpg',
      title: "ADIDAS MEN",
      price: "50$",
      gender: "men",
      brand: 'adidas',
      size: 'M,L,XL'
    },
    card5: {
      class: "card",
      img: './assets/clothesAssets/adidas-men2.jpg',
      title: "ADIDAS MEN",
      price: "60$",
      gender: "men",
      brand: 'adidas',
      size: 'M,L,XL'
    },
    card6: {
      class: "card",
      img: './assets/clothesAssets/adidas-men3.jpg',
      title: "ADIDAS MEN",
      price: "50$",
      gender: "men",
      brand: 'adidas',
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

  constructor() { }
}
