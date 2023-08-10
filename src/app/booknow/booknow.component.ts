import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-booknow',
  templateUrl: './booknow.component.html',
  styleUrls: ['./booknow.component.css']
})
export class BooknowComponent {
  isModalOpen: boolean = false;
  currentSubPage: { name: string, content: any[] } = { name: '', content: [] };
  currentPage: string = 'location';
  currentLocation: string = '';
  selectedService: string = '';
  selectedSubService: any = '';
  selectedBarber: any = '';
  allBarbers: any[] = [
    { name: 'Oribe Canales', location: 'Eryaman', image: '1.jpg' },
    { name: 'Clint Wilson', location: 'Umitkoy', image: '2.jpg' },
    { name: 'Danny Garrity', location: 'cankaya', image: '3.jpg'},
  ];

  userSelections: {
    location: string,
    services: string,
    service: string,
    color: string,
    barber: string
  } = {
    location: '',
    services: '',
    service: '',
    color: '',
    barber: ''
  };

  serviceOptions = [
    { name: 'Haircuts' },
    { name: 'Color' },
    { name: 'Color and Cut Combo' },
    { name: 'Everything Else' }
  ];

  pagesContentMap: { [key: string]: { name: string, content: any[] } } = {
    Haircuts: {
      name: 'Selam',
      content: [
        { label: 'Standart Haircut', price: 20 },
        { label: 'Layered Haircut', price: 30 },
        { label: 'Extended Cut', price: 40 },
        { label: 'Clipper Cut', price: 30 }
      ]
    },
    Color: {
      name: 'Color',
      content: [
        { label: 'Red',  price: 25},
        { label: 'Brown', price: 25 },
        { label: 'Blonde', price: 25 },
        { label: 'Black', price: 25 }
      ]
    },
    'Color and Cut Combo': {
      name: 'Color and Cut Combo',
      content: [
        { label: 'Red Color with Standard Haircut', price: 45 },
        { label: 'Brown Color with Layered Haircut', price: 50 },
        { label: 'Blonde Color with Crew Cut', price: 55 },
        { label: 'Black Color with Buzz Cut', price: 35 }
      ]
    },
    'Everything Else': {
      name: 'Everything Else',
      content: [
        { label: 'Beard Trim', price: 15 },
        { label: 'Shampoo and Blow Dry', price: 20 },
        { label: 'Styling and Updo', price: 25 },
        { label: 'Scalp Massage and Treatment', price: 35 }
      ]
    }
  };

  constructor(private modalService: ModalService) {
    this.modalService.modalOpen$.subscribe((modalOpen) => {
      this.isModalOpen = modalOpen;
    });

  }

  preventModalClose(event: Event): void {
    event.stopPropagation();
  }

  closeModal(): void {
    this.modalService.closeModal();
  }

  openSubPage(page: string, location?: string): void {
    if (this.currentPage === 'location') {
      this.currentPage = 'services';
      if (location) {
        this.currentLocation = location;
        this.userSelections.location = location;
        console.log(location);
      }
    } else if (this.serviceOptions.some(option => option.name === page)) {

      this.currentPage = page;
      this.selectedService = page;
      this.userSelections.services = page;
      console.log(page);
    } else if (this.pagesContentMap['Haircuts'].content) {
      this.selectedSubService = page;
      this.userSelections.service = page;
      this.openBarberPage(page);
      console.log(page);
    }

      else if (this.currentPage = 'barber') {
        this.selectedBarber = page;
        this.userSelections.barber = page;
        console.log(page);
      }
  }

  openBarberPage(selectedPageLabel: string): void {
    this.currentPage = 'barber';

  }

  selectBarber(barber: any): void {

    this.selectedBarber = barber;
    this.currentPage = 'barber';
  }
  
  confirmBooking(selectedHairdresser: any): void {
    
  }

  goBack(): void {
    if (this.currentPage === 'services') {
      this.currentPage = 'location';
    }   
    else if (this.currentPage !== 'location') {
      this.currentPage = 'services';
    }
  }
}