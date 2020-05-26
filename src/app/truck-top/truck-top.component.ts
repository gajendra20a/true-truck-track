import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck';
import { TRUCKS } from '../truck-data';

import { TruckDataService } from './../truck-data.service';

@Component({
  selector: 'app-truck-top',
  templateUrl: './truck-top.component.html',
  styleUrls: ['./truck-top.component.css']
})
export class TruckTopComponent implements OnInit {
  trucks;
  selectedTruck: Truck;
  
  onSelect(truck: Truck): void {
    this.trucks = this.truckDataService.getTrucks();
  }

  constructor(
    private truckDataService: TruckDataService,
  ) { }

  ngOnInit(): void {
  }

}
