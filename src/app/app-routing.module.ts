import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class AppRoutingModule {}

export const routes: Route[] = [
  { path: '', component: ProductsListComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'category/:category', component: ProductsListComponent },
  { path: '**', component: ProductsListComponent },
];
