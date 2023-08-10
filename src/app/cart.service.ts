import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { CartItem } from './models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  
  constructor() {}

  getCartItemCount(): number {
    return this.cartItems.reduce((total, item) => total + item.cartItemCount, 0);
  }

  addToCart(product: Product): void {
    const existingCartItem = this.cartItems.find(item => item.id === product.id);
  
    if (existingCartItem) {
  
    } else {
      const cartItems: CartItem = {
        id: product.id,
        brand: product.brand,
        model: product.model,
        price: product.price,
        img: product.img,
        button: product.button,
        cartItemCount: 1,
        isSelected: false,
        quantity: 1,
        showTextbox: false
      };
      this.cartItems.push(cartItems);
    }
  }
  
  removeFromCart(item: CartItem): void {
    const index = this.cartItems.findIndex(cartItem => cartItem.id === item.id);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getCartItems(): CartItem[] {
    return this.cartItems;
  }
}
