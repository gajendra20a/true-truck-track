import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface TruckData {
  tName: string;
  tNumber: string;
}
@Component({
  selector: 'app-add-truck',
  templateUrl: './add-truck.component.html',
  styleUrls: ['./add-truck.component.css']
})
export class AddTruckComponent {

  constructor(
    public dialogRef: MatDialogRef<AddTruckComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TruckData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
