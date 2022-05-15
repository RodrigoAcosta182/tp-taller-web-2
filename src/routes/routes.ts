import { Routes } from '@angular/router';
import { CheckoutComponent } from 'src/app/pages/checkout/checkout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

import { LoginComponent } from 'src/app/pages/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
