import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { productListResolver } from '@/_resolvers';
import { ProductDetailsComponent } from './product-details.component';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailsComponent,
    resolve: { products: productListResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductDetailsRoutingModule { }
