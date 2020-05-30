import {TruckDataService} from './../../services/truck-data.service';
import {Component, Input, OnInit} from '@angular/core';
import {APITruck, APITruckWithStatus} from '../../models/apiTruck';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {AddTruckComponent} from './../add-truck/add-truck.component';
import {combineLatest, Observable} from "rxjs";
import {startWith, tap} from "rxjs/operators";

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})

export class TruckListComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private truckDataService: TruckDataService,
  ) {
  }

  displayList: APITruckWithStatus[] = [];
  input = new FormControl('');
  tName: string;
  tNumber: string;

  ngOnInit() {
    combineLatest([
      this.truckDataService.listTrucks,
      this.input.valueChanges.pipe(startWith(""))
    ])
      .pipe(tap(([trucks, input]) =>
        console.log("I am on the component and filtering based on input string", trucks, input)
      ))
      .subscribe(([allTrucks, input]) => {
        if (input === '') {
          this.displayList = allTrucks;
        } else {
          this.displayList = allTrucks.filter((truck) => {
            return truck.truckNumber?.indexOf(input) >= 0;
          });
        }
      })
  }


  openAddTruck() {
    const dialogRef = this.dialog.open(AddTruckComponent, {
      width: '600px',
      data: {tName: this.tName, tNumber: this.tNumber}
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      this.truckDataService.addNewTruck(result);
    });
  }

}
