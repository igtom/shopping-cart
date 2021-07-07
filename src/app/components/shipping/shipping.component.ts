import { Component, OnInit } from '@angular/core';
import { CartService} from '../../services/cart.service'

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  shippingCosts = this.cartService.getShippingPrices()

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  

}
