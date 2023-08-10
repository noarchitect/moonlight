import { Component, HostListener  } from '@angular/core';
import { Stylist } from '../models/stylist';
import { StylistRepo } from '../models/stylist.repo';

@Component({
  selector: 'app-stylists',
  templateUrl: './stylists.component.html',
  styleUrls: ['./stylists.component.css']
})
export class StylistsComponent {
title = "Stylists";
stylists: Stylist[];
stylistRepo: StylistRepo;
selectedStylist: Stylist | undefined;
isModalOpen: boolean = false;

@HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.closeModal();
}
  preventModalClose(event: Event): void {
  event.stopPropagation();
}

  openModal(stylist: Stylist): void {
    this.selectedStylist = stylist;
    this.isModalOpen = true;
}

  closeModal(): void {
    this.selectedStylist = undefined;
    this.isModalOpen = false;
  }

constructor() {
  this.stylistRepo = new StylistRepo();
  this.stylists = this.stylistRepo.getStylists();
  
}
}
