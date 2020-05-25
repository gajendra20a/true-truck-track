import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck';
import { TRUCKS } from '../truck-data';

@Component({
  selector: 'app-truck-top',
  templateUrl: './truck-top.component.html',
  styleUrls: ['./truck-top.component.css']
})
export class TruckTopComponent implements OnInit {
  trucks = TRUCKS;
  selectedTruck: Truck;
  
  onSelect(truck: Truck): void {
    this.selectedTruck = truck;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
