import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CartProductsComponent } from './cart-products.component';

const routes: Routes = [
  {
    path: '',
    component: CartProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartProductsRoutingModule { }
