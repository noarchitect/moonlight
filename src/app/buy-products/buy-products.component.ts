import { Component} from '@angular/core';
import { ProductRepo } from '../models/product.repo';
import { CartService } from '../cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-buy-products',
  templateUrl: './buy-products.component.html',
  styleUrls: ['./buy-products.component.css']
})
export class BuyProductsComponent{
  products: Product[];
  productRepo: ProductRepo;

  constructor(
    private cartService: CartService,
  ) {
    this.productRepo = new ProductRepo();
    this.products = this.productRepo.getProducts();
  }

  addToCart(product: Product): void{
    if (product.cartItemCount === 0) {
      this.cartService.addToCart(product);
        product.cartItemCount += 1;
    }
}
}
