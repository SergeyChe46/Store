import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IProduct } from 'src/app/models/iproduct';
import { IproductAddViewModel } from 'src/app/models/iproduct-add-view-model.interface';
import IProductCard from 'src/app/models/product-card.interface';
import { ProductCardService } from 'src/app/services/product-card.service';
import { ProductRepositoryService } from 'src/app/services/product-repository.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  categories!: string[];

  constructor(
    private productCardService: ProductCardService,
    private productService: ProductRepositoryService<
      IProduct,
      IproductAddViewModel
    >,
    private modalService: NgbModal
  ) {}
  closeResult!: string;
  productCard: IProductCard[] = [];

  ngOnInit(): void {
    this.showCategories();
  }

  getNumberOfProductsInCard(): number {
    return this.productCardService.productsInCard();
  }

  getCardAmount(): number {
    return this.productCardService.getCardAmount();
  }

  showCategories() {
    this.productService.getAllCategories().subscribe((cats) => {
      this.categories = cats;
    });
  }

  open(content: any) {
    this.productCard = this.productCardService.Card;
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
