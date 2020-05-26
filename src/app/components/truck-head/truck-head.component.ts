import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {APITruck} from "../../models/apiTruck";
import {FormControl} from "@angular/forms";
import {running, stopped, total, TruckDataService, idle} from "../../services/truck-data.service";

@Component({
  selector: 'app-truck-head',
  templateUrl: './truck-head.component.html',
  styleUrls: ['./truck-head.component.css']
})
export class TruckHeadComponent {
  @Input() set allTrucks(allTrucks: APITruck[]) {
    this.allTrucksFromInput = allTrucks;
    this.setupTruckCount();
  }

  @Output() displayTruckType = new EventEmitter<string>();

  public allTrucksFromInput: APITruck[] = [];
  public totalTrucks: number;
  public runningTrucks: number;
  public stoppedTrucks: number;
  public idleTrucks: number;
  public errorTrucks: number;

  constructor(private truckDataService: TruckDataService) {
  }

  private setupTruckCount() {
    this.totalTrucks = this.allTrucksFromInput.length;
    this.runningTrucks = 0;
    this.stoppedTrucks = 0;
    this.idleTrucks = 0;
    this.allTrucksFromInput.forEach((truck) => {
      switch (this.truckDataService.getTruckType(truck)) {
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

  public showAllTrucks() {
    this.displayTruckType.emit(total);
  }

  public showRunningTrucks() {
    this.displayTruckType.emit(running);
  }

  public showStoppedTrucks() {
    this.displayTruckType.emit(stopped);
  }

  public showIdleTrucks() {
    this.displayTruckType.emit(idle);
  }

}
