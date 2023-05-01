import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient
  ) { }


  getCategories(): Observable<any> {
    return this.httpClient.get(environment.apiURL + 'categories')
  }

  createCategory(name: string): Observable<any> {
    return this.httpClient.post(environment.apiURL + 'categories', {name})
  }
}
