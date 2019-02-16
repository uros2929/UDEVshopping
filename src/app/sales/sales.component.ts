import { Component, OnInit } from '@angular/core';
import { ProductsObjectsService } from '../products-objects.service';
import { ModalsForResponsiveService } from '../modals-for-responsive.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private products:ProductsObjectsService,private modalsResponsive:ModalsForResponsiveService) { }

  numOfProdInCart=this.products.getNumOfProductsInCart;

  ngOnInit() {
    this.numOfProdInCart=Object.keys(this.products.getProductsFromLocal).length;
  }

}
