import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';

import { OrderDetail } from '@/_models';

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [ ButtonModule, DividerModule ],
  templateUrl: './order-detail.component.html',
  styleUrl: './order-detail.component.scss'
})
export class OrderDetailComponent implements OnInit, OnChanges {

  @Input() OrderDetailsData: any[];
  
  public productPrice: number = 0;
  public discountProductPercentage: number = 0;
  public discountedPrice: number = 0;
  public deliveryFee: number = 15;
  public totalPrice: number = 0;

  ngOnChanges(changes: any) {
    // if(changes.OrderDetailsData) {
    //   console.log("working");
    // }
    // console.log(changes.OrderDetailsData);
    // this.getcalculateTotalPrice();
    // for(const inputName in changes['OrderDetailsData']) {
    //   const inputValues = changes[inputName];
    //   // console.log(inputValues);
    //   // console.log(`Previous ${inputName} == ${inputValues.previousValue}`);
    //   // console.log(`Current ${inputName} == ${inputValues.currentValue}`);
    //   // console.log(`Is first ${inputName} change == ${inputValues.firstChange}`);
    // }
  }

  
  ngDoCheck( ) {
    console.log(this.OrderDetailsData);
    this.getcalculateTotalPrice();
  }

  ngOnInit() { 
    this.getcalculateTotalPrice();
  }

  getcalculateTotalPrice(){

    this.productPrice = this.OrderDetailsData.reduce((sum, product) => sum + product.price , 0);
    const discountPercentage = this.OrderDetailsData.reduce((sum, discountProduct) => sum + discountProduct.discountPercentage, 0 );

    this.discountProductPercentage = discountPercentage.toFixed(2);

    const discountAmount = parseFloat(((this.discountProductPercentage / 100) * this.productPrice).toFixed(2));
    const totalProductCount = this.OrderDetailsData.reduce((sumCount, productCount) => sumCount + productCount.count, 0);

    this.discountedPrice = parseFloat((this.productPrice - discountAmount).toFixed(2));
    this.totalPrice = (this.productPrice - this.discountedPrice + this.deliveryFee) *  totalProductCount;

  }
}
