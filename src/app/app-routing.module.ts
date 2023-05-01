import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NoAuthGuard} from "./core/auth/guards/noAuth.guard";
import {AuthGuard} from "./core/auth/guards/auth.guard";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '' },

  // Auth routes for guests
  {
    path: 'sign-in',
    canActivate: [NoAuthGuard],
    canActivateChild: [NoAuthGuard],
    loadChildren: () => import('src/app/authentication/authentication.module').then(m => m.AuthenticationModule)
  },

  // Auth routes for authenticated users
  {
    path: '',
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    loadChildren: () =>
      import('./_metronic/layout/layout.module').then((m) => m.LayoutModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
