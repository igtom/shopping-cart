import { Component } from '@angular/core';
import { products } from '../../products';
import { Product } from '../../interfaces/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products: Product[] = products;
}
