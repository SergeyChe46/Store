import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { IproductAddViewModel } from 'src/app/models/iproduct-add-view-model.interface';
import { ProductCardService } from 'src/app/services/product-card.service';
import { ProductRepositoryService } from 'src/app/services/product-repository.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private productService: ProductRepositoryService<
      IProduct,
      IproductAddViewModel
    >,
    private cardService: ProductCardService,
    private httpRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = +this.httpRoute.snapshot.params['id'];
    this.productService.getById(id).subscribe((product) => {
      this.product = product;
      console.log(product);
    });
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

  product!: IProduct;
}
