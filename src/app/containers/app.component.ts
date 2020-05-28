import { Component, OnInit } from '@angular/core';
import { APITruck } from '../models/apiTruck';
import { total, TruckDataService } from '../services/truck-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public allTrucks: APITruck[] = [];
  public listDisplayTrucks: APITruck[] = [];

  constructor(
    private truckDataService: TruckDataService
    ) {
  }

  ngOnInit() {
    this.truckDataService.trucks$.subscribe((response) => {
      this.allTrucks = response.data;
      this.listDisplayTrucks = this.allTrucks;
    })
  }

  public displayTruckType(event) {
    let displayTrucks: APITruck[] = [];
    let truckStatus: string;
    if (event === total) {
      displayTrucks = this.allTrucks;
    } else {
      this.allTrucks.filter((truck) => {
        truckStatus = this.truckDataService.getTruckType(truck);
        if (event === truckStatus){
          displayTrucks = [...displayTrucks, ...[truck]];
        }
      });
    }
    this.listDisplayTrucks = displayTrucks;
  }
}
