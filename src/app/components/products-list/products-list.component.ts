import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/iproduct';
import { IproductAddViewModel } from 'src/app/models/iproduct-add-view-model.interface';
import { ProductRepositoryService } from 'src/app/services/product-repository.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: IProduct[];

  constructor(
    private productservice: ProductRepositoryService<
      IProduct,
      IproductAddViewModel
    >
  ) {
    this.products = new Array<IProduct>();
  }
  ngOnInit(): void {
    this.productservice.getAll().subscribe((data) => {
      (this.products = data), console.log(data);
    });
  }
}
