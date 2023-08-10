import { Component} from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
  isMoonlight: boolean = false;
  isModalOpen: boolean = false;

  openModalAndToggle(): void {
    this.openModal();
    this.toggleMoonlight();
  }

  openModal(): void {
    this.modalService.openModal();
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  constructor(
    private cartService: CartService,
    private router: Router,
    private modalService: ModalService
  ) {}
  
  toggleMoonlight() {
    this.isMoonlight = !this.isMoonlight;

    if (this.isMoonlight) {
      this.router.navigate(['/moonlight']);
      
    } else {
      this.router.navigate(['/booknow']);
    }
  }
  
  get cartItemCount(): number {
    return this.cartService.getCartItemCount();
  }
}