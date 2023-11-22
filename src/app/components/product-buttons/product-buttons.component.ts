import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { ProductCardService } from 'src/app/services/product-card.service';
/**
 * Основные действия с товарами до покупки.
 */
@Component({
  selector: 'app-product-buttons',
  templateUrl: './product-buttons.component.html',
  styleUrls: ['./product-buttons.component.css'],
})
export class ProductButtonsComponent {
  @Input() isDetailsPage: boolean = false;
  @Input() product!: IProduct;

  constructor(private cardService: ProductCardService) {}

  addToCard(product: IProduct) {
    this.cardService.addProductToCard(product);
  }

  removeFromCard(product: IProduct) {
    this.cardService.removeProductFromCard(product);
  }
  /**
   * Проверяет наличие товара в корзине.
   * @param id
   * @returns
   */
  productInCard(id: number) {
    return this.cardService.checkProductInCard(id);
  }
}
