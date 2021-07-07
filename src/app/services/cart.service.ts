import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
 
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];


  constructor() { }


  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items
  }


}
