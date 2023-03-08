import { Component, OnInit } from '@angular/core';
import { Product } from './model/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  productList!: Product[];
  priceMax!:number;
  buyProduct(i:number){
    this.productList[i].quantity--
  }
  likeProduct(j:number){
    this.productList[j].like++
  }

  
  ngOnInit(): void {
    this.productList=[
      {id:1, title:"task1", price:20, quantity:10, like:0},
      {id:2, title:"task1", price:25, quantity:15, like:0},
      {id:3, title:"task1", price:26, quantity:20, like:0},
      {id:4, title:"task1", price:30, quantity:5, like:0},
      {id:5, title:"task1", price:10, quantity:40, like:0},
    ]
  }
constructor(){}
}
