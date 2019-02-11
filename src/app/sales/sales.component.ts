import { Component, OnInit } from '@angular/core';
import { ProductsObjectsService } from '../products-objects.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  constructor(private products:ProductsObjectsService) { }

  numOfProdInCart=this.products.getNumOfProductsInCart;

  ngOnInit() {
    this.numOfProdInCart=Object.keys(this.products.getProductsFromLocal).length;
  }

}
