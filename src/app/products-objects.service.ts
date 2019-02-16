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
      size: ['40 EUR', '41 EUR', '43 EUR', '45 EUR']
    },
    card2: {
      class: "card",
      img: './assets/shoesAssets/Air-Jordan-11-Concord-2018.jpg ',
      title: "AIR JORDAN 11 CONCORD",
      price: "100$",
      gender: "men",
      brand: 'jordan',
      size: ['40 EUR', '41 EUR', '42 EUR', '43 EUR', '45 EUR', '45.5 EUR', '46 EUR']
    },
    card3: {
      class: "card",
      img: './assets/shoesAssets/under-armour-charged-bandit-2_men.jpg',
      title: "UNDER ARMOUR CHARGED BANDIT 2",
      price: "75$",
      gender: "women",
      brand: 'under armour',
      size: ['35 EUR', '35.5 EUR', '36 EUR', '36.5 EUR', '37 EUR', '38 EUR']
    },
    card4: {
      class: "card",
      img: './assets/shoesAssets/Adidas_EQT-support-ADV_Black_Turbo_Red-1.jpg',
      title: "ADIDAS EQT",
      price: "125$",
      gender: "men",
      brand: "adidas",
      size: ['43 EUR', '45 EUR', '45.5 EUR', '46 EUR']
    },
    card5: {
      class: "card",
      img: './assets/shoesAssets/jordan-kids.jpg',
      title: "JORDAN KIDS",
      price: "50$",
      gender: "kids",
      brand: "jordan",
      size: ['30 EUR', '31 EUR', '32 EUR', '33 EUR', '34 EUR', '35 EUR']
    },
    card6: {
      class: "card",
      img: './assets/shoesAssets/JordanW.jpg',
      title: "JORDAN 13 WOMEN",
      price: "115$",
      gender: "women",
      brand: "jordan",
      size: ['36.5 EUR', '37 EUR', '38 EUR']
    }
  }
  cardObjClothes = {
    card1: {
      class: "card",
      img: './assets/clothesAssets/nike-men1.jpg',
      title: "NIKE MEN 1",
      price: "80$",
      gender: "men",
      brand: 'nike',
      size: ['L', 'XL', 'XXL']
    },
    card2: {
      class: "card",
      img: './assets/clothesAssets/nike-men2.jpg',
      title: "NIKE MEN 2",
      price: "90$",
      gender: "men",
      brand: 'nike',
      size: ['M', 'L', 'XL', 'XXL']
    },
    card3: {
      class: "card",
      img: './assets/clothesAssets/nike-men3.jpg',
      title: "NIKE MEN 3",
      price: "100$",
      gender: "men",
      brand: 'nike',
      size: ['M', 'L', 'XL', 'XXL']
    },
    card4: {
      class: "card",
      img: './assets/clothesAssets/adidas-men1.jpg',
      title: "ADIDAS MEN 1",
      price: "50$",
      gender: "men",
      brand: 'adidas',
      size: ['M', 'L', 'XL']
    },
    card5: {
      class: "card",
      img: './assets/clothesAssets/adidas-men2.jpg',
      title: "ADIDAS MEN 2",
      price: "60$",
      gender: "men",
      brand: 'adidas',
      size: ['M', 'L', 'XL']
    },
    card6: {
      class: "card",
      img: './assets/clothesAssets/adidas-men3.jpg',
      title: "ADIDAS MEN 3",
      price: "50$",
      gender: "men",
      brand: 'adidas',
      size: ['S', 'M', 'L', 'XL']
    },
    card7: {
      class: "card",
      img: './assets/clothesAssets/underA-men1.jpg',
      title: "UNDER ARMOUR MEN 1",
      price: "50$",
      gender: "men",
      brand: 'under armour',
      size: ['S', 'M', 'L', 'XL']
    },
    card8: {
      class: "card",
      img: './assets/clothesAssets/underA-men2.jpg',
      title: "UNDER ARMOUR MEN 2",
      price: "40$",
      gender: "men",
      brand: 'under armour',
      size: ['S', 'M', 'L', 'XL']
    },
    card9: {
      class: "card",
      img: './assets/clothesAssets/underA-women1.jpg',
      title: "UNDER ARMOUR WOMEN 1",
      price: "40$",
      gender: "women",
      brand: 'under armour',
      size: ['XS', 'S', 'M', 'L']
    },
    card10: {
      class: "card",
      img: './assets/clothesAssets/underA-women2.jpg',
      title: "UNDER ARMOUR WOMEN 2",
      price: "70$",
      gender: "women",
      brand: 'under armour',
      size: ['XS', 'S', 'M', 'L']
    },
    card11: {
      class: "card",
      img: './assets/clothesAssets/underA-women3.jpg',
      title: "UNDER ARMOUR WOMEN 3",
      price: "65$",
      gender: "women",
      brand: 'under armour',
      size: ['XS', 'S', 'M', 'L']
    },
    card12: {
      class: "card",
      img: './assets/clothesAssets/nike-kids1.jpg',
      title: "NIKE KIDS 1",
      price: "35$",
      gender: "kids",
      brand: 'nike',
      size: ['XS', 'S', 'M']
    }
  }

  cardObjAccessories = {
    card1: {
      class: "card",
      img: './assets/accessoriesAssets/adidas-bag1.jpg',
      title: "ADIDAS BAG 1",
      price: "35$",
      brand: 'adidas',
      accessories: 'bag',
      size: ['one size']
    },
    card2: {
      class: "card",
      img: './assets/accessoriesAssets/adidas-bag2.jpg',
      title: "ADIDAS BAG 2",
      price: "30$",
      brand: 'adidas',
      accessories: 'bag',
      size: ['one size']
    },
    card4: {
      class: "card",
      img: './assets/accessoriesAssets/adidas-cap1.jpg',
      title: "ADIDAS CAP 1",
      price: "25$",
      brand: 'adidas',
      accessories: 'cap',
      size: ['one size']
    },
    card5: {
      class: "card",
      img: './assets/accessoriesAssets/adidas-cap2.jpg',
      title: "ADIDAS CAP 2",
      price: "20$",
      brand: 'adidas',
      accessories: 'cap',
      size: ['one size']
    },
    card6: {
      class: "card",
      img: './assets/accessoriesAssets/adidas-socks1.jpg',
      title: "ADIDAS SOCKS 1",
      price: "13$",
      brand: 'adidas',
      accessories: 'socks',
      size: ['one size']
    },
    card7: {
      class: "card",
      img: './assets/accessoriesAssets/adidas-socks2.jpg',
      title: "ADIDAS SOCKS 2",
      price: "13$",
      brand: 'adidas',
      accessories: 'socks',
      size: ['one size']
    },
    card8: {
      class: "card",
      img: './assets/accessoriesAssets/jordan-socks3.jpg',
      title: "JORDAN SOCKS 1",
      price: "15$",
      brand: 'jordan',
      accessories: 'socks',
      size: ['one size']
    },
    card9: {
      class: "card",
      img: './assets/accessoriesAssets/jordan-cap1.jpg',
      title: "JORDAN SOCKS 2",
      price: "12$",
      brand: 'jordan',
      accessories: 'cap',
      size: ['one size']
    },
    card10: {
      class: "card",
      img: './assets/accessoriesAssets/jordan-socks1.jpg',
      title: "JORDAN SOCKS 3",
      price: "15$",
      brand: 'jordan',
      accessories: 'socks',
      size: ['one size']
    },
    card11: {
      class: "card",
      img: './assets/accessoriesAssets/nike-bag1.jpg',
      title: "NIKE BAG 1",
      price: "35$",
      brand: 'nike',
      accessories: 'bag',
      size: ['one size']
    },
    card12: {
      class: "card",
      img: './assets/accessoriesAssets/nike-bag2.jpg',
      title: "NIKE BAG 2",
      price: "30$",
      brand: 'nike',
      accessories: 'bag',
      size: ['one size']
    },
    card13: {
      class: "card",
      img: './assets/accessoriesAssets/nike-cap1.jpg',
      title: "NIKE CAP 1",
      price: "20$",
      brand: 'nike',
      accessories: 'cap',
      size: ['one size']
    },
    card14: {
      class: "card",
      img: './assets/accessoriesAssets/nike-cap2.jpg',
      title: "NIKE CAP 1",
      price: "20$",
      brand: 'nike',
      accessories: 'cap',
      size: ['one size']
    },
    card15: {
      class: "card",
      img: './assets/accessoriesAssets/nike-cap3.jpg',
      title: "NIKE CAP 3",
      price: "25$",
      brand: 'nike',
      accessories: 'cap',
      size: ['one size']
    },
    card16: {
      class: "card",
      img: './assets/accessoriesAssets/nike-socks1.jpg',
      title: "NIKE SOCKS 1",
      price: "12$",
      brand: 'nike',
      accessories: 'socks',
      size: ['one size']
    },
    card17: {
      class: "card",
      img: './assets/accessoriesAssets/nike-socks2.jpg',
      title: "NIKE SOCKS 2",
      price: "14$",
      brand: 'nike',
      accessories: 'socks',
      size: ['one size']
    },
    card18: {
      class: "card",
      img: './assets/accessoriesAssets/nike-socks3.jpg',
      title: "NIKE SOCKS 3",
      price: "15$",
      brand: 'nike',
      accessories: 'socks',
      size: ['one size']
    },
    card19: {
      class: "card",
      img: './assets/accessoriesAssets/underA-bag1.jpg',
      title: "UNDER ARMOUR BAG 1",
      price: "29$",
      brand: 'under armour',
      accessories: 'bag',
      size: ['one size']
    },
    card20: {
      class: "card",
      img: './assets/accessoriesAssets/underA-bag2.jpg',
      title: "UNDER ARMOUR BAG 2",
      price: "27$",
      brand: 'under armour',
      accessories: 'bag',
      size: ['one size']
    },
    card21: {
      class: "card",
      img: './assets/accessoriesAssets/underA-socks1.jpg',
      title: "UNDER ARMOUR SOCKS 1",
      price: "15$",
      brand: 'under armour',
      accessories: 'socks',
      size: ['one size']
    },
    card22: {
      class: "card",
      img: './assets/accessoriesAssets/underA-socks2.jpg',
      title: "UNDER ARMOUR SOCKS 2",
      price: "11$",
      brand: 'under armour',
      accessories: 'socks',
      size: ['one size']
    },
    card23: {
      class: "card",
      img: './assets/accessoriesAssets/jordan-socks2.jpg',
      title: "JORDAN SOCKS 4",
      price: "15$",
      brand: 'jordan',
      accessories: 'socks',
      size: ['one size']
    },
  }

  getProductsFromLocal = localStorage.getItem('productsInCart') !== null ? JSON.parse(localStorage.getItem('productsInCart')) : {};
  getKeysOfProductsInLocal= Object.keys(this.getProductsFromLocal);
  getNumOfProductsInCart = Object.keys(this.getProductsFromLocal).length;
  constructor() { }

  addProductsInLocalStorage(event) {
    let getProductNameAndPrice = event.target.offsetParent.children[1].children[0].childNodes[0].textContent,
      getProductPrice = event.target.offsetParent.children[1].children[0].childNodes[2].textContent,
      getImgOfProduct = event.target.offsetParent.children[0].attributes[2].value,
      getSizeOfProduct = event.target.offsetParent.children[1].children[0].children[2].value,
      arrayForNameAndPrice = [];
    arrayForNameAndPrice.push(getProductNameAndPrice, getProductPrice);
    let productForMainArray = arrayForNameAndPrice.join('').split('USD ');
    this.getProductsFromLocal[productForMainArray[0]] = {
      productName: productForMainArray[0],
      productPrice: productForMainArray[1],
      productImg: getImgOfProduct.slice(22, -2),
      productSize: getSizeOfProduct,
      quantity: 1
    };
    localStorage.setItem('productsInCart', JSON.stringify(this.getProductsFromLocal))
  }
}
