import { ResolveFn } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

import { Observable } from 'rxjs';
import { ProductService } from '@/_services';

export const productListResolver: ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any[]> => {
  
  const productService = inject(ProductService);
  return productService.getProductData();
  
};


