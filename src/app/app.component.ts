import { Component } from '@angular/core';

import { Products } from './core/data/products';
import { IProduct } from './core/models/IProduct';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'product-app';

  products: IProduct[] = Products.slice();

  addProduct(e: number) {
    console.log(e)
  }
}
