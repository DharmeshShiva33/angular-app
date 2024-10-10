import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productApiUrl = "https://dummyjson.com/products";
  private productCategoryApiUrl = "https://dummyjson.com/products/categories";

  constructor(private http: HttpClient) { }

  getProductData(): Observable<any> {
    return this.http.get(this.productApiUrl);
  }

  getProductCategoryData(): Observable<any> {
    return this.http.get(this.productCategoryApiUrl);
  }
  
  getProductById(productId: number) {
    return this.http.get<any>(`${this.productApiUrl}/${productId}`);
  }
}
