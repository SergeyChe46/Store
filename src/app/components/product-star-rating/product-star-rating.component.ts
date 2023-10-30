import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';

@Component({
  selector: 'app-product-star-rating',
  templateUrl: './product-star-rating.component.html',
  styleUrls: ['./product-star-rating.component.css'],
})
export class ProductStarRatingComponent implements OnInit {
  @Input() product!: IProduct;
  @Input() isDetailPage: boolean = true;
  /**
   * Массив для хранения рейтинга заполненный нулями. Затем первые N позиции, соответствующие количеству звёзд подставляются единицы.
   */
  rating: number[] = Array(5).fill(0);
  buyAmount: number = 0;

  ngOnInit(): void {
    /**
     * Округлённое количество звёзд.
     */
    let r: number = Math.round(this.product.rating.rate);
    this.buyAmount = this.product.rating.count;
    this.rating.fill(1, 0, r);
  }
}
