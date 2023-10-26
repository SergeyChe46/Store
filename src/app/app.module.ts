import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductRepositoryService } from './services/product-repository.service';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@NgModule({
  declarations: [AppComponent, ProductsListComponent, ProductCardComponent, NavbarComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ProductRepositoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
