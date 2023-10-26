import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import IProductCard from '../models/product-card.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  constructor() {}
  private _productCard: IProductCard[] = [];

  addProductToCard(product: IProduct) {
    let productInCard = this.checkProductInCard(product.id);
    if (productInCard) {
      productInCard.quantity += 1;
    } else {
      let newProduct = {
        product: product,
        quantity: 1,
      } as IProductCard;
      this._productCard.push(newProduct);
    }
    this.recalculateCard();
  }

  removeProductFromCard(product: IProduct) {
    let productInCard = this.checkProductInCard(product.id);
    if (productInCard) {
      productInCard.quantity -= 1;
      this.recalculateCard();
    }
  }

  checkProductInCard(id: number): IProductCard | undefined {
    return this._productCard.find((prod) => prod.product.id == id);
  }

  getCardAmount(): number {
    let amount: number = 0;
    this._productCard.forEach((prod) => {
      amount += prod.quantity * prod.product.price;
    });
    return amount;
  }

  productsInCard(): number {
    return this._productCard.length;
  }

  private recalculateCard() {
    this._productCard.filter((prod) => prod.quantity > 1);
  }
}
