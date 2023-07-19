import { Component } from '@angular/core';
import { Hairdresser } from '../models/hairdresser';
import { HairdresserRepo } from '../models/hairdresser.repo';

@Component({
  selector: 'app-hairdressers',
  templateUrl: './hairdressers.component.html',
  styleUrls: ['./hairdressers.component.css']
})
export class HairdressersComponent {
title = "Hairdressers";
hairdressers: Hairdresser[];
hairdresserRepo: HairdresserRepo;

constructor() {
  this.hairdresserRepo = new HairdresserRepo();
  this.hairdressers = this.hairdresserRepo.getHairdressers();
}
}
