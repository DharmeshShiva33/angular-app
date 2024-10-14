import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

import { OrderDetail } from '@/_models';
import { OrderDetailComponent } from '@/shared';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ ButtonModule, DropdownModule, DividerModule, InputTextModule, ReactiveFormsModule, OrderDetailComponent ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {

  public country: any[] | undefined = [
            { name: 'New York', code: 'NY' },
            { name: 'Rome', code: 'RM' },
            { name: 'London', code: 'LDN' },
            { name: 'Istanbul', code: 'IST' },
            { name: 'Paris', code: 'PRS' }
          ];
  public checkoutForm: FormGroup = new FormGroup({});
  public orderDetails: any[] = [];

  ngOnInit() {
    this.initCheckoutForm();
    this.getAddProductItem();
  }

  initCheckoutForm() {
    const phoneRegex = '^[0-9]{10}$';
    const panNumberRegex = '[A-Z]{5}[0-9]{4}[A-Z]{1}';
    const pinCodeRegex = '^[0-9]{10}$'
    this.checkoutForm = new FormGroup({
      'firstName': new FormControl('', [
        Validators.required,
      ]),
      'lastName': new FormControl ('', [
        Validators.required
      ]),
      'mobileNumber': new FormControl ('', [
        Validators.required,
        Validators.pattern(phoneRegex),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]),
      'panNumber': new FormControl ('', [
        Validators.required,
        Validators.pattern(panNumberRegex)
      ]),
      'streetAddress': new FormControl ('', [
        Validators.required
      ]),
      'appartment': new FormControl ('', [
        Validators.required
      ]),
      'city': new FormControl ('', [
        Validators.required
      ]),
      'state': new FormControl ('', [
        Validators.required
      ]),
      'pinCode': new FormControl ('', [
        Validators.required,
        Validators.pattern(pinCodeRegex),
        Validators.minLength(6),
        Validators.maxLength(6)
      ]),
    });
  }
          
  checkoutFormOnSubmit() {
    if(this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
    } else {
      console.log(this.checkoutForm.value);
    }
  }

  getCheckoutFormErrorMessage(controlName: string) : any {
    if (this.checkoutForm.controls[controlName].hasError('required')) {
      if (controlName === 'firstName') {
        return 'Enter First Name.';
      } else if (controlName === 'lastName') {
        return 'Enter Last Name';
      } else if (controlName === 'mobileNumber') {
        return 'Enter Mobile Number';
      } else if (controlName === 'panNumber') {
        return 'Enter PAN Number';
      } else if (controlName === 'streetAddress') {
        return 'Enter Street Address';
      } else if (controlName === 'appartment') {
        return 'Enter Apartname';
      } else if (controlName === 'city') {
        return 'Enter City Name';
      } else if (controlName === 'state') {
        return 'Enter State Name';
      } else if (controlName === 'pinCode') {
        return 'Enter PinCode Number';
      }
      
    }
    if (this.checkoutForm.controls[controlName].hasError('pattern')) {
      if (controlName === 'mobileNumber') {
        return 'Enter 10 digits Number.';
      } else if (controlName === 'panNumber') {
        return 'Enter Valid PAN Number';
      } else if (controlName === 'pinCode') {
        return 'Enter Valid Pin Code'
      }
    }

    if (this.checkoutForm.controls[controlName].hasError('minLength')) {
      if (controlName === 'mobileNumber') {
        return 'Enter Minimum 10 digits Number.';
      } else if (controlName === 'pinCode') {
        return 'Enter Minimum 6 digits Namuber';
      }
    }

    if (this.checkoutForm.controls[controlName].hasError('maxLength')) {
      if (controlName === 'maxLength') {
        return 'Enter Manimum 10 digits Number.';
      } else if(controlName === 'pinCode') {
        return 'Enter Maximum 6 digits Number';
      }
    }
  }

  getAddProductItem() {
    const productObject = localStorage.getItem('cartProduct');
      if (productObject) {
      this.orderDetails = JSON.parse(productObject);
      console.log(this.orderDetails);
      }
  }
}
