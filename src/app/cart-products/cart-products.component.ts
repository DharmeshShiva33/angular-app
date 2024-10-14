import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrl: './cart-products.component.scss'
})
export class CartProductsComponent implements OnInit {

  public addProductValue: number = 1;
  public addProductdata: any[] =[];
  public productPrice: number = 0;
  public discountProductPercentage: number = 0;
  public discountedPrice: number = 0;
  public deliveryFee: number = 15;
  public totalPrice: number = 0;

  ngOnInit() {
    this.getAddProductItem();
    // this.getcalculateTotalPrice();
  }

  addCardIncreament(index: any) {
    if(index >= 0 && index < this.addProductdata.length) {
      this.addProductdata[index].count++;
      // console.log(this.addProductdata[index]);
      localStorage.setItem('cartProduct', JSON.stringify(this.addProductdata));
    }

    //this.getcalculateTotalPrice();
  }

  addCardDecrease(index: any) {
    if(index >= 0 && index < this.addProductdata.length) {
      if(this.addProductdata[index].count > 0) {
        this.addProductdata[index].count--;
      }
      localStorage.setItem('cartProduct', JSON.stringify(this.addProductdata));
    }
    // this.getcalculateTotalPrice();
  }

  deleteCartProduct(index: any) {
    if(index >= 0 && index < this.addProductdata.length) {
      console.log(this.addProductdata[index]);
      this.addProductdata.splice(index, 1);
      localStorage.setItem('cartProduct', JSON.stringify(this.addProductdata));
    }
  }

  // getcalculateTotalPrice(){

  //   this.productPrice = this.addProductdata.reduce((sum, product) => sum + product.price , 0);
  //   const discountPercentage = this.addProductdata.reduce((sum, discountProduct) => sum + discountProduct.discountPercentage, 0 );

  //   this.discountProductPercentage = discountPercentage.toFixed(2);

  //   const discountAmount = parseFloat(((this.discountProductPercentage / 100) * this.productPrice).toFixed(2));
  //   const totalProductCount = this.addProductdata.reduce((sumCount, productCount) => sumCount + productCount.count, 0);

  //   this.discountedPrice = parseFloat((this.productPrice - discountAmount).toFixed(2));
  //   this.totalPrice = (this.productPrice - this.discountedPrice + this.deliveryFee) *  totalProductCount;
  // }

  getAddProductItem() {
    const productObject = localStorage.getItem('cartProduct');
      if (productObject) {
      this.addProductdata = JSON.parse(productObject);
      console.log(this.addProductdata);
      }
  }

}
