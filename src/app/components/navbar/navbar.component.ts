import { Component } from '@angular/core';
import { ProductCardService } from 'src/app/services/product-card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private productService: ProductCardService) {}

  getNumberOfProductsInCard(): number {
    return this.productService.productsInCard();
  }

  getCardAmount(): number {
    return this.productService.getCardAmount();
  }
}
