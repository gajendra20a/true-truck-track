import {Component, OnInit} from '@angular/core';
import {TruckDataService} from '../../services/truck-data.service';
import {APITruck} from "../../models/apiTruck";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-truck-top',
  templateUrl: './truck-top.component.html',
  styleUrls: ['./truck-top.component.css']
})
export class TruckTopComponent implements OnInit {
  public allTrucks: APITruck[] = [];
  public displayList: APITruck[] = [];
  public input = new FormControl('')

  constructor(
    private truckDataService: TruckDataService,
  ) {
  }

  ngOnInit(): void {
    this.truckDataService.trucks$.subscribe((response) => {
      this.allTrucks = response.data;
      this.displayList = this.allTrucks;
    })

  }

  public inputChanged() {
    const inputValue = this.input.value
    if (inputValue == '') {
      this.displayList = this.allTrucks;
    } else {
      this.displayList = this.allTrucks.filter((truck) => {
        return truck.truckNumber.indexOf(inputValue) >= 0;
      })
    }
  }

}
