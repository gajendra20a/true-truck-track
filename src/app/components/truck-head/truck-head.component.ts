import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {APITruck} from '../../models/apiTruck';
import {running, stopped, total, TruckDataService, idle} from '../../services/truck-data.service';

@Component({
  selector: 'app-truck-head',
  templateUrl: './truck-head.component.html',
  styleUrls: ['./truck-head.component.css']
})
export class TruckHeadComponent implements OnInit {

  public totalTrucks: number;
  public runningTrucks: number;
  public stoppedTrucks: number;
  public idleTrucks: number;
  public errorTrucks: number;

  constructor(private truckDataService: TruckDataService) {
  }

  ngOnInit() {
    this.truckDataService.trucks$.subscribe((trucks) => {
        this.totalTrucks = trucks.length;
        this.runningTrucks = 0;
        this.stoppedTrucks = 0;
        this.idleTrucks = 0;
        trucks.forEach((truck) => {
          switch (truck.status) {
            case running:
              this.runningTrucks++;
              break;
            case stopped:
              this.stoppedTrucks++;
              break;
            case idle:
              this.idleTrucks++;
              break;
          }
        });
      }
    )
  }

  private setupTruckCount() {

  }

  public showAllTrucks() {
    this.truckDataService.updateFilter(total);
  }

  public showRunningTrucks() {
    this.truckDataService.updateFilter(running);
  }

  public showStoppedTrucks() {
    this.truckDataService.updateFilter(stopped);
  }

  public showIdleTrucks() {
    this.truckDataService.updateFilter(idle);
  }

}
