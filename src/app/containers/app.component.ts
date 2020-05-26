import { error } from './../services/truck-data.service';
import {Component, OnInit} from '@angular/core';
import {APITruck} from "../models/apiTruck";
import {running, stopped, total, idle, TruckDataService} from "../services/truck-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public allTrucks: APITruck[] = [];
  public listDisplayTrucks: APITruck[] = [];

  constructor(private truckDataService: TruckDataService) {
  }

  ngOnInit() {
    this.truckDataService.trucks$.subscribe((response) => {
      this.allTrucks = response.data;
      this.listDisplayTrucks = this.allTrucks;
    })
  }

  public displayTruckType(event) {
    let displayTrucks: APITruck[] = [];
    if (event === total) {
      displayTrucks = this.allTrucks;
    } else {
      this.allTrucks.forEach((truck) => {
        switch (this.truckDataService.getTruckType(truck)) {
          case running:
            displayTrucks = [...displayTrucks, ...[truck]];
            break;
          case stopped:
            displayTrucks = [...displayTrucks, ...[truck]];
            break;
          case idle:
            displayTrucks = [...displayTrucks, ...[truck]];
            break;
        }
      });
    }
    this.listDisplayTrucks = displayTrucks;
  }
}
