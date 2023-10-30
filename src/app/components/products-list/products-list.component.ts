import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/models/iproduct';
import { IproductAddViewModel } from 'src/app/models/iproduct-add-view-model.interface';
import { ProductRepositoryService } from 'src/app/services/product-repository.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  /**
   * Коллекция товаров.
   */
  products: IProduct[];
  /**
   * Категория из строки запроса.
   */
  category!: string | null;

  constructor(
    private productservice: ProductRepositoryService<
      IProduct,
      IproductAddViewModel
    >,
    private route: ActivatedRoute
  ) {
    this.products = new Array<IProduct>();
  }
  ngOnInit(): void {
    this.category = this.route.snapshot.params['category'];
    // Подписка на изменение категории в строке запроса.
    this.route.params.subscribe((param) => {
      this.category = param['category'];
    });
    // Фильтрация продуктов по категориям.
    this.productservice.getAll().subscribe((data) => {
      this.products = this.category
        ? data.filter((p) => p.category == this.category)
        : data;
    });
  }
}
