import { Component, Input } from '@angular/core';
import { APITruck } from "../../models/apiTruck";
import { FormControl } from "@angular/forms";
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

  allTrucksFromInput: APITruck[] = [];
  displayList: APITruck[] = [];
  input = new FormControl('');
  tName: string;
  tNumber: string;


  openAddTruck(){
    const dialogRef = this.dialog.open(AddTruckComponent, {
      width: '600px',
      data: {tName: this.tName, tNumber: this.tNumber}
    });

    dialogRef.afterClosed().subscribe((result = '') => {
      this.tName = result.tName;
      this.tNumber = result.tNumber;
    });
  }

  inputChanged() {
    const inputValue = this.input.value;
    if (inputValue === '') {
      this.displayList = this.allTrucksFromInput;
    } else {
      this.displayList = this.allTrucksFromInput.filter((truck) => {
        return truck.truckNumber.indexOf(inputValue) >= 0;
      });
    }
  }

}
