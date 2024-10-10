import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';

import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { MenuItem } from 'primeng/api';

import { ProductService } from '@/_services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements AfterViewInit, OnDestroy, OnInit {

  @ViewChild("sliderRef") sliderRef: ElementRef<HTMLElement>;

  public productDetailsData: any[] = [];
  public productRating: number = 4;
  public productTitle: string = '';
  items = [
    { image: 'path/to/image1.jpg' },
    { image: 'path/to/image2.jpg' },
    { image: 'path/to/image3.jpg' },
    // Add more items as needed
  ];
  public productId: number = 0;
  public singleProductData: any;
  public detailsTab: MenuItem[] | undefined =  [
    { label: 'Dashboard', icon: 'pi pi-home' },
    { label: 'Transactions', icon: 'pi pi-chart-line' },
    { label: 'Products', icon: 'pi pi-list' },
    { label: 'Messages', icon: 'pi pi-inbox' }
  ];
  public detailsactiveItemTab: MenuItem | undefined = this.detailsTab[0];
  public slider: any;
  public showReview: boolean = false;
  public reviewStatus: any[] | undefined = [
    { name: 'Highest Review', code: 'assending' },
    { name: 'Lowest Review', code: 'dessending' },

  ];
  public selectedReviewStatus: any;
  public addProductValue: number = 1;
  public cartProduct: any[] = [];
  public cardItemLength: number = 0;

  constructor(private activeRoute: ActivatedRoute, private productDetailsService:ProductService) { }

  ngOnInit() {
    this.productId = +this.activeRoute.snapshot.paramMap.get('id');
    this.getProductDetails(this.productId);

    const storedCart = localStorage.getItem('cartProduct');
    if(storedCart) {
      this.cartProduct = JSON.parse(storedCart);
    }
  }

  addCardIncreament(event: Event) {
    console.log(event);
    this.addProductValue++;
    const existingProductIndex = this.cartProduct.findIndex(item => item.id === this.singleProductData.id);
    if(existingProductIndex !== -1) {
      this.cartProduct[existingProductIndex]['count'] = this.addProductValue;
    } else {
      this.addProductValue++;
      this.singleProductData['count'] = this.addProductValue;
      this.cartProduct.push({ ...this.singleProductData }); 
    }
    localStorage.setItem('cartProduct', JSON.stringify(this.cartProduct));
  }

  addCardDecrease() {
    if(this.addProductValue > 0) {
      this.addProductValue--;
      
      const existingProductIndex = this.cartProduct.findIndex(item => item.id === this.singleProductData.id);
      if(existingProductIndex !== -1) {
        this.cartProduct[existingProductIndex]['count'] = this.addProductValue;
      } else {
        this.addProductValue--;
        this.singleProductData['count'] = this.addProductValue;
        this.cartProduct.push({ ...this.singleProductData }); 
      }
      localStorage.setItem('cartProduct', JSON.stringify(this.cartProduct));
    }
    
  }

  addCardItem() {
    const existingProduct = this.cartProduct.find(item => item.id === this.singleProductData.id);
    if(existingProduct) {
      console.log(`${this.singleProductData.title} is already in cart`);
    } else {
      this.singleProductData['count'] = this.addProductValue;
      this.cartProduct.push(this.singleProductData);
      localStorage.setItem('cartProduct', JSON.stringify(this.cartProduct));
      console.log(`${this.singleProductData.title} added to the Cart`);
    }
  }

  onDropdownChange(event: any) {
    this.selectedReviewStatus = event.value;
    console.log('Selected Value:', this.selectedReviewStatus);
    if(this.selectedReviewStatus.code === "assending") {
      this.singleProductData.reviews.sort((a, b) => a.rating - b.rating);
    }else {
      this.singleProductData.reviews.sort((a, b) => b.rating - a.rating);
    }
    console.log(this.singleProductData.reviews);
  }

  getProductDetails(productId: number) {
    // this.productDetailsService.getProductData().subscribe(response => {
    //   this.productDetailsData = response.products;
    // })

    // this.activeRoute.data.subscribe((data) => {
    //   this.productDetailsData = data['products'].products;
    // })
    this.productDetailsService.getProductById(productId).subscribe({
      next: (data) => {
        this.singleProductData = data;
        console.log(this.singleProductData);
      },
      error: (error) => {
        console.error('Error fetching product details:', error);
      },
    })
  }

  onTabChange(event: any) {
    this.detailsactiveItemTab = event.value;
  }


  ngAfterViewInit() {
    this.slider = new KeenSlider(this.sliderRef.nativeElement);
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }

}
