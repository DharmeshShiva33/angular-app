import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { Subscription } from 'rxjs';

import { MostPopulat, ProductType } from '@/_models';
import { ProductService } from '@/_services';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  public mostPopulatItems: MenuItem[] = [ 
    { label: 'Options' }
  ];
  public productType: any[] = [
    { name: 'T-shirts', code: 'NY' },
    { name: 'Shorts', code: 'RM' },
    { name: 'Shirts', code: 'LDN' },
    { name: 'Hoodie', code: 'IST' },
    { name: 'Jeans', code: 'PRS' }
  ];
  public mostPopularItemStatus: MostPopulat[] = [
    { name: 'Latest Popular', status: 'latestPopular' },
    { name: 'Oldest Popular', status: 'oldestPopular' },
  ];
  public productRating: number = 0;
  public productPrice: number = 0;
  public productData: any[] = [];
  public productCategoriesData: any[] = [];
  public selectedProductCategoriesValue: "";
  public text: string = "red";
  public minPrice: number = 0; // Minimum price
  public maxPrice: number = 1000;
  public priceRangeValues: number[] = [];
  public filteredProducts: any;
  public filterValue: string = "";
  private subscription: Subscription;



  constructor(private router: Router, private _productServices: ProductService) {}

  ngOnInit(): void {
    this.getProductData();
    this.filterProductsByPrice();
    this.getProductCategoryData();
    this.filterProductByCategories();
  }

  onProductDetails(productId: number) {
    this.router.navigate(['/product-details', productId]);
  }

  filterInputData(filterInputValue: string) {
    const searchItem = filterInputValue.trim().toLowerCase();

    if(!searchItem) {
      this.filteredProducts = [...this.productData];
    } else {
      this.filteredProducts = this.productData.filter(filterProduct => 
        filterProduct.title.toLowerCase().includes(searchItem)
      );
    }
  }
  
  getProductCategoryData() {
    this._productServices.getProductCategoryData().subscribe(response => {
      this.productCategoriesData = response;
    })
  }

  filterProductByCategories() {
    this.filteredProducts = this.productData.filter( product =>
      product.category === this.selectedProductCategoriesValue
    );
  }

  onProductCategoriesChange(event: any) {
    this.selectedProductCategoriesValue = event.slug;
    this.filterProductByCategories();
  }

  getProductData() {
    this._productServices.getProductData().subscribe(response => {
      this.productData = response.products;
      const prices = this.productData
      .map(product => product.price)
      .filter(price => typeof price === 'number' && !isNaN(price) );

      if(prices.length > 0) {
        this.minPrice =  Math.min(...prices);
        this.maxPrice = Math.max(...prices);
        this.priceRangeValues = [this.minPrice, this.maxPrice];
      } else {
        this.minPrice = 0;
        this.maxPrice = 0;
        this.priceRangeValues = [0, 0];
      }

      this.filteredProducts = this.productData;
    });
  }

  filterProductsByPrice() {
    this.filteredProducts = this.productData.filter(product => 
      product.price >= this.priceRangeValues[0] && product.price <= this.priceRangeValues[1]
    );
  }

  onPriceChange() {
    this.filterProductsByPrice();
  }

  ngOnDestroy() {
    if(this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
