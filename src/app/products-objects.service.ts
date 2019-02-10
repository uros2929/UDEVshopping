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

  cardObjAccessories={
    card1:{
      class: "card",
      img: './assets/accessoriesAssets/adidas-bag1.jpg',
      title: "ADIDAS BAG",
      price: "35$",
      brand: 'adidas',
      accessories: 'bag'
    },
    card2:{
      class: "card",
      img: './assets/accessoriesAssets/adidas-bag2.jpg',
      title: "ADIDAS BAG",
      price: "30$",
      brand: 'adidas',
      accessories: 'bag'
    },
    card4:{
      class: "card",
      img: './assets/accessoriesAssets/adidas-cap1.jpg',
      title: "ADIDAS CAP",
      price: "25$",
      brand: 'adidas',
      accessories: 'cap'
    },
    card5:{
      class: "card",
      img: './assets/accessoriesAssets/adidas-cap2.jpg',
      title: "ADIDAS CAP",
      price: "20$",
      brand: 'adidas',
      accessories: 'cap'
    },
    card6:{
      class: "card",
      img: './assets/accessoriesAssets/adidas-socks1.jpg',
      title: "ADIDAS SOCKS",
      price: "13$",
      brand: 'adidas',
      accessories: 'socks'
    },
    card7:{
      class: "card",
      img: './assets/accessoriesAssets/adidas-socks2.jpg',
      title: "ADIDAS SOCKS",
      price: "13$",
      brand: 'adidas',
      accessories: 'socks'
    },
    card8:{
      class: "card",
      img: './assets/accessoriesAssets/jordan-socks3.jpg',
      title: "JORDAN SOCKS",
      price: "15$",
      brand: 'jordan',
      accessories: 'socks'
    },
    card9:{
      class: "card",
      img: './assets/accessoriesAssets/jordan-cap1.jpg',
      title: "JORDAN SOCKS",
      price: "12$",
      brand: 'jordan',
      accessories: 'cap'
    },
    card10:{
      class: "card",
      img: './assets/accessoriesAssets/jordan-socks1.jpg',
      title: "JORDAN SOCKS",
      price: "15$",
      brand: 'jordan',
      accessories: 'socks'
    },
    card11:{
      class: "card",
      img: './assets/accessoriesAssets/nike-bag1.jpg',
      title: "NIKE BAG",
      price: "35$",
      brand: 'nike',
      accessories: 'bag'
    },
    card12:{
      class: "card",
      img: './assets/accessoriesAssets/nike-bag2.jpg',
      title: "NIKE BAG",
      price: "30$",
      brand: 'nike',
      accessories: 'bag'
    },
    card13:{
      class: "card",
      img: './assets/accessoriesAssets/nike-cap1.jpg',
      title: "NIKE CAP",
      price: "20$",
      brand: 'nike',
      accessories: 'cap'
     
    },
    card14:{
      class: "card",
      img: './assets/accessoriesAssets/nike-cap2.jpg',
      title: "NIKE CAP",
      price: "20$",
      brand: 'nike',
      accessories: 'cap'
    },
    card15:{
      class: "card",
      img: './assets/accessoriesAssets/nike-cap3.jpg',
      title: "NIKE CAP",
      price: "25$",
      brand: 'nike',
      accessories: 'cap'
    },
    card16:{
      class: "card",
      img: './assets/accessoriesAssets/nike-socks1.jpg',
      title: "NIKE SOCKS",
      price: "12$",
      brand: 'nike',
      accessories: 'socks'
    },
    card17:{
      class: "card",
      img: './assets/accessoriesAssets/nike-socks2.jpg',
      title: "NIKE SOCKS",
      price: "14$",
      brand: 'nike',
      accessories: 'socks'
    },
    card18:{
      class: "card",
      img: './assets/accessoriesAssets/nike-socks3.jpg',
      title: "NIKE SOCKS",
      price: "15$",
      brand: 'nike',
      accessories: 'socks'
    },
    card19:{
      class: "card",
      img: './assets/accessoriesAssets/underA-bag1.jpg',
      title: "UNDER ARMOUR BAG",
      price: "29$",
      brand: 'under armour',
      accessories: 'bag'
    },
    card20:{
      class: "card",
      img: './assets/accessoriesAssets/underA-bag2.jpg',
      title: "UNDER ARMOUR BAG",
      price: "27$",
      brand: 'under armour',
      accessories: 'bag'
    },
    card21:{
      class: "card",
      img: './assets/accessoriesAssets/underA-socks1.jpg',
      title: "UNDER ARMOUR SOCKS",
      price: "15$",
      brand: 'under armour',
      accessories: 'socks'
    },
    card22:{
      class: "card",
      img: './assets/accessoriesAssets/underA-socks2.jpg',
      title: "UNDER ARMOUR SOCKS",
      price: "11$",
      brand: 'under armour',
      accessories: 'socks'
    },
    card23:{
      class: "card",
      img: './assets/accessoriesAssets/jordan-socks2.jpg',
      title: "JORDAN SOCKS",
      price: "15$",
      brand: 'jordan',
      accessories: 'socks'
    },
  }

  constructor() { }
}
