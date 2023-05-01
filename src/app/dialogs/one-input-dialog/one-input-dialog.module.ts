import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OneInputDialogComponent} from "./one-input-dialog.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [OneInputDialogComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class OneInputDialogModule { }
