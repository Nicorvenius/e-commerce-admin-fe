import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication.component';
import {SignInComponent} from "./sign-in/sign-in.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {authenticationRouting} from "./authentication.routing";



@NgModule({
  declarations: [
    AuthenticationComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    RouterModule.forChild(authenticationRouting),
  ]
})
export class AuthenticationModule { }
