import {Route} from '@angular/router';
import {SignInComponent} from "./sign-in/sign-in.component";
import {AuthenticationComponent} from "./authentication.component";

export const authenticationRouting: Route[] = [
{
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
      {
        path: 'login',
        component: SignInComponent,
      },
    ]
  }
];
