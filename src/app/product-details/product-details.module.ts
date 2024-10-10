import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { DividerModule } from 'primeng/divider';
import { TabViewModule } from 'primeng/tabview';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';

import { HeaderComponent } from '@/shared';
import { ProductDetailsComponent } from './product-details.component';
import { ProductDetailsRoutingModule } from './product-details-routing.module';

import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    HeaderComponent,
    ChipModule ,
    DividerModule,
    FormsModule,
    RatingModule,
    TabViewModule,
    ProductDetailsRoutingModule
  ]
})
export class ProductDetailsModule { }
