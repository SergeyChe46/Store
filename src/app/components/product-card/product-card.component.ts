import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductCardService } from 'src/app/services/product-card.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() product: IProduct;
  constructor(private cardService: ProductCardService) {
    this.product = {
      id: 0,
      title: '',
      price: 0,
      category: '',
      description: '',
      image: '',
    };
  }

  addToCard(product: IProduct) {
    this.cardService.addProductToCard(product);
  }

  removeFromCard(product: IProduct) {
    this.cardService.removeProductFromCard(product);
  }

  productInCard(id: number) {
    return this.cardService.checkProductInCard(id);
  }
}
