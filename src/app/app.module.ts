import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductButtonsComponent } from './components/product-buttons/product-buttons.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductStarRatingComponent } from './components/product-star-rating/product-star-rating.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductRepositoryService } from './services/product-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCardComponent,
    NavbarComponent,
    ProductDetailComponent,
    ProductButtonsComponent,
    ProductStarRatingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    NgbModule,
  ],
  providers: [ProductRepositoryService],
  bootstrap: [AppComponent],
})
export class AppModule {}
