import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {ProductDto} from "../dto/product.dto";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getProducts(): Observable<any>{
    return this.httpClient.get(environment.apiURL + 'product')
  }

  getProduct(id: string): Observable<any> {
    return this.httpClient.get(environment.apiURL + 'product/' + id)
  }

  createProduct(product: ProductDto): Observable<any> {
    return this.httpClient.post(environment.apiURL + 'product', product)
  }

  updateProduct(product: ProductDto, id: string | null): Observable<any> {
    return this.httpClient.patch(environment.apiURL + 'product/' + id, product)
  }

  uploadFile(productId: string, file: File): Observable<any> {
    const formData = new FormData();

    formData.append("file", file);
    return this.httpClient.post(environment.apiURL + 'product/uploadFileForProduct/' + productId, formData);
  }
}
