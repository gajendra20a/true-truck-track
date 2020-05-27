import {Component, Input, OnInit} from '@angular/core';
import {APITruck} from "../../models/apiTruck";
import {FormControl} from "@angular/forms";
import { MatDialog } from '@angular/material/dialog';
import { AddTruckComponent } from './../add-truck/add-truck.component';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent {
  @Input() set allTrucks(allTrucks: APITruck[]) {
    this.allTrucksFromInput = allTrucks;
    this.inputChanged();
  }

  constructor(
    private dialog: MatDialog
  ){}

  public allTrucksFromInput: APITruck[] = [];
  public displayList: APITruck[] = [];
  public input = new FormControl('')

  public openAddTruck(){
    this.dialog.open(AddTruckComponent);
  }

  public inputChanged() {
    const inputValue = this.input.value;
    if (inputValue === '') {
      this.displayList = this.allTrucksFromInput;
    } else {
      this.displayList = this.allTrucksFromInput.filter((truck) => {
        return truck.truckNumber.indexOf(inputValue) >= 0;
      })
    }
  }

}
