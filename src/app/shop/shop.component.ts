import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  marketing1Array = ['nike-air-max-720-aurora-boreal-AO2924-001.jpg', 'kickz_reebok_DMX_series1600.jpg', 'giles_angel_nike_shoe(pp_w1400_h1063).jpg'];


  constructor() { }

  ngOnInit() {
    this.changeImgForMarketing1();
  }

  changeImgForMarketing1() {
    let marketing1 = document.getElementById('marketing-1'),
      index = 0;
    marketing1.style.backgroundImage = "url('../../assets/shopAssets/" + this.marketing1Array[index] + "')";
    setInterval(() => {
      index++;
      marketing1.style.backgroundImage = "url('../../assets/shopAssets/" + this.marketing1Array[index] + "')";
      if (index == this.marketing1Array.length) {
        index=0;
        marketing1.style.backgroundImage = "url('../../assets/shopAssets/" + this.marketing1Array[index] + "')";
      }
    }, 6000)

  }
}
