import { CartService } from '../cart.service';
import { Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  selectedCheckboxItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.selectedCheckboxItems = [];
    this.cartItems.forEach(cartItem => {
      cartItem.showTextbox = this.selectedCheckboxItems.includes(cartItem);
    });
  }

  control(item: CartItem): void {
  if (item.cartItemCount === 0) {
   alert('SELAM');
  }
}

  decrementQuantity(item: CartItem): void {
    if (item.quantity > 1) {
      item.quantity--;
    }
  }
  
  incrementQuantity(item: CartItem): void {
    item.quantity++;
  }
  
  quantityChanged(item: CartItem): void {
    if (item.quantity < 1) {
      item.quantity = 1;
    }
  }

  removeCartItem(item: CartItem): void {
    this.cartService.removeFromCart(item);

    const selectedItemIndex = this.selectedCheckboxItems.findIndex(selectedItem => selectedItem.id === item.id);
    if (selectedItemIndex !== -1) {
      this.selectedCheckboxItems.splice(selectedItemIndex, 1);
    }
  }

  calculateTotalPrice(): number {
    return this.selectedCheckboxItems.reduce((total, item) => total + (parseFloat(item.price) * item.quantity), 0);
  }

  buySelectedItems(): void {
    alert('Redirecting to the checkout page!');
  }

  toggleCartItem(item: CartItem): void {
    if (this.selectedCheckboxItems.includes(item)) {
      this.selectedCheckboxItems = this.selectedCheckboxItems.filter(prod => prod !== item);
      item.showTextbox = false;
    } else {
      this.selectedCheckboxItems.push(item);
      item.showTextbox = true;
      item.quantity = 1;
    }
  }

  get cartItemCount(): number {
    return this.cartService.getCartItemCount();
  }
}