import { Component, OnInit } from '@angular/core';
import { ProductsObjectsService } from '../products-objects.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

 

  constructor(private products:ProductsObjectsService) { }

  marketing1Array = ['nike-air-max-720-aurora-boreal-AO2924-001.jpg', 'kickz_reebok_DMX_series1600.jpg', 'giles_angel_nike_shoe(pp_w1400_h1063).jpg'];
  marketing2Array = ['kickz_deva_state_quadrate.jpg'];
  marketing3Array = ['bhm-collage.jpg'];
  marketing4Array = ['air-jordan-12-retro-black-pink-12.jpg']

  numOfProdInCart=this.products.getNumOfProductsInCart;

  ngOnInit() {
    this.changeImgForMarketing1();
  }

  changeImgForMarketing1() {
    let marketing1 = document.getElementById('marketing-1'),
      marketing2 = document.getElementById('marketing-2'),
      marketing3 = document.getElementById('marketing-3'),
      marketing4 = document.getElementById('marketing-4'),
      index = 0;
    marketing1.style.backgroundImage = "url('./assets/shopAssets/" + this.marketing1Array[index] + "')";
    marketing2.style.backgroundImage = "url('./assets/shopAssets/" + this.marketing2Array[index] + "')";
    marketing3.style.backgroundImage = "url('./assets/shopAssets/" + this.marketing3Array[index] + "')";
    marketing4.style.backgroundImage = "url('./assets/shopAssets/" + this.marketing4Array[index] + "')";
    setInterval(() => {
      index++;
      marketing1.style.backgroundImage = "url('./assets/shopAssets/" + this.marketing1Array[index] + "')";
      if (index == this.marketing1Array.length) {
        index = 0;
        marketing1.style.backgroundImage = "url('./assets/shopAssets/" + this.marketing1Array[index] + "')";
      }
    }, 6000)

  }
}
