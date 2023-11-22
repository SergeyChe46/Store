import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { IproductAddViewModel } from 'src/app/models/iproduct-add-view-model.interface';
import { ProductRepositoryService } from 'src/app/services/product-repository.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct;

  constructor(
    private productService: ProductRepositoryService<
      IProduct,
      IproductAddViewModel
    >,
    private httpRoute: ActivatedRoute
  ) {}
/**
 * Получает товар по его ID.
 */
  ngOnInit(): void {
    let id = +this.httpRoute.snapshot.params['id'];
    this.productService.getById(id).subscribe((product) => {
      this.product = product;
    });
  }
}
