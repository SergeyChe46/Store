import { Component, OnInit } from '@angular/core';
import { ProductCardService } from 'src/app/services/product-card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // productCard: IProductCard[] = [];
  constructor(private productService: ProductCardService) {}

  ngOnInit(): void {
    // this.productCard = this.productService.productCard;
  }

  getNumberOfProductsInCard(): number {
    return this.productService.productsInCard();
  }

  getCardAmount(): number {
    return this.productService.getCardAmount();
  }
}
