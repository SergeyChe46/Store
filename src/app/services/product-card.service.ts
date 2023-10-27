import { Injectable } from '@angular/core';
import { IProduct } from '../models/iproduct';
import IProductCard from '../models/product-card.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductCardService {
  constructor() {}
  private _productCard: IProductCard[] = [];

  /** Добавляет продукт в корзину, если его в ней нет. Иначе - обновляет количество товара.
   * @param product добавляемый продукт.
   */
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

  /** Удаляет продукт из корзины. Обновляет количество товара.
   * @param product удаляемый продукт.
   */
  removeProductFromCard(product: IProduct) {
    let productInCard = this.checkProductInCard(product.id);
    if (productInCard) {
      productInCard.quantity -= 1;
      this.recalculateCard();
    }
  }

  /** Находит товар в корзине, иначе - 'undefined'.
   * @param id ID товара
   * @returns возвращает товар, если он в корзине.
   */
  checkProductInCard(id: number): IProductCard | undefined {
    return this._productCard.find((prod) => prod.product.id == id);
  }

  /** Возвращает цену товаров в корзине.
   * @returns цена товаров в корзине.
   */
  getCardAmount(): number {
    let amount: number = 0;
    this._productCard.forEach((prod) => {
      amount += prod.quantity * prod.product.price;
    });
    return amount;
  }

  /** Возвращает количество товаров в корзине.
   * @returns Количество товаров в корзине.
   */
  productsInCard(): number {
    let totalProductsInCard: number = 0;
    this._productCard.forEach((prod) => {
      totalProductsInCard += prod.quantity;
    });
    return totalProductsInCard;
  }

  /** Пересчитывает количестов товара в корзине. Удаляет позиции с количестовм меньше 1.
   */
  private recalculateCard(): void {
    this._productCard = this._productCard.filter((prod) => prod.quantity > 0);
  }
}
