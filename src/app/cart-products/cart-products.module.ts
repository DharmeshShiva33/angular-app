import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DividerModule } from 'primeng/divider';

import { HeaderComponent } from '@/shared';
import { CartProductsComponent } from './cart-products.component';
import { CartProductsRoutingModule } from './cart-products-routing.module';

@NgModule({
  declarations: [
    CartProductsComponent,
    
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    FormsModule,
    DividerModule,
    ButtonModule,
    CartProductsRoutingModule
  ]
})
export class CartProductsModule { }
