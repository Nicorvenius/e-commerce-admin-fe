import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-one-input-dialog',
  templateUrl: './one-input-dialog.component.html',
  styleUrls: ['./one-input-dialog.component.scss']
})
export class OneInputDialogComponent {

  data: {dialogTitle: string; inputName: string;};
  value: string;
  constructor(
    public dialogRef: MatDialogRef<OneInputDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: {dialogTitle: string; inputName: string;},
  ) {
    this.data = data;
  }

  closeDialog() {
    this.dialogRef.close(this.value)
  }
}
