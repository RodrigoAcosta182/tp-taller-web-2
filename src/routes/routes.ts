import { Routes } from '@angular/router';
import { HomeComponent } from 'src/app/pages/home/home.component';

import { LoginComponent } from 'src/app/pages/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
