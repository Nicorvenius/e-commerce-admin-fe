import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../core/services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  constructor(
    private readonly productService: ProductService,
    private readonly router: Router
  ) {
  }

  products: any;

  ngOnInit(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    })
  }

  goToEdit(id: string) {
    this.router.navigateByUrl('/product/edit/' + id);
  }
}
