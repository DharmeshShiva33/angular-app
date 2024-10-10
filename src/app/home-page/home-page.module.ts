import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { ListboxModule } from 'primeng/listbox';
import { RatingModule } from 'primeng/rating';
import { SliderModule } from 'primeng/slider';

import { HeaderComponent } from '@/shared';
import { HomePageComponent } from './home-page.component';
import { HomePageRoutingModule } from './home-page-routing.module';

@NgModule({
  declarations: [ HomePageComponent ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    DropdownModule,
    DividerModule,
    HeaderComponent,
    FormsModule,
    MenuModule,
    ListboxModule,
    RatingModule,
    SliderModule,
    HomePageRoutingModule
  ]
})
export class HomePageModule { }
