import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { CardNumberComponent } from './card-number.component';
import { ExpiryDateComponent } from './expiry-date.component';
import { CvvComponent } from './cvv.component';
// import { PayButtonComponent } from './pay-button/pay-button.component';


@NgModule({
  declarations: [
    CardNumberComponent,
    ExpiryDateComponent,
    CvvComponent,
    // PayButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CardNumberComponent,
    ExpiryDateComponent,
    CvvComponent,
    // PayButtonComponent
  ]
})
export class ManosAfrmModule { }
