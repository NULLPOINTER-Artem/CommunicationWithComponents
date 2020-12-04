import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppProductsComponent } from './app-products/app-products.component';
import { AppProductCardComponent } from './app-product-card/app-product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AppProductsComponent,
    AppProductCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
