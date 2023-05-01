import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import {RouterModule} from "@angular/router";
import {productRouting} from "./product.routing";
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { EditProductComponent } from './edit-product/edit-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {OneInputDialogModule} from "../../dialogs/one-input-dialog/one-input-dialog.module";
import {MatDialogModule} from "@angular/material/dialog";



@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    ToolbarComponent,
    EditProductComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRouting),
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    FormsModule,
    OneInputDialogModule,
    MatDialogModule
  ]
})
export class ProductModule { }
