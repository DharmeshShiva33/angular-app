import { Component, Input } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

import { OrderDetail } from '@/_models';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [ ButtonModule, DividerModule ],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})
export class OrderDetailsComponent {

  @Input() OrderDetailsData = new OrderDetail;
  
}
