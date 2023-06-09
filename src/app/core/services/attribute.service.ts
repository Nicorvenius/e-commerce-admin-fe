import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AttributeService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getAttributes(): Observable<any> {
    return this.httpClient.get(environment.apiURL + 'product-attributes')
  }

  createAttribute(name: string): Observable<any> {
    return this.httpClient.post(environment.apiURL + 'product-attributes', {name})
  }
}
