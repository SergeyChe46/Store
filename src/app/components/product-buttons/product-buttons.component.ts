import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductCardService } from 'src/app/services/product-card.service';

@Component({
  selector: 'app-product-buttons',
  templateUrl: './product-buttons.component.html',
  styleUrls: ['./product-buttons.component.css'],
})
export class ProductButtonsComponent {
  constructor(private cardService: ProductCardService) {}

  addToCard(product: IProduct) {
    this.cardService.addProductToCard(product);
  }

  removeFromCard(product: IProduct) {
    this.cardService.removeProductFromCard(product);
  }

  productInCard(id: number) {
    return this.cardService.checkProductInCard(id);
  }

  @Input() product!: IProduct;
}
