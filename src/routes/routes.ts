import { Routes } from '@angular/router';
import { CambiarpasswordComponent } from 'src/app/pages/cambiarpassword/cambiarpassword.component';
import { CheckoutComponent } from 'src/app/pages/checkout/checkout.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

import { LoginComponent } from 'src/app/pages/login/login.component';
import { RecuperarcuentaComponent } from 'src/app/pages/recuperarcuenta/recuperarcuenta.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';
import { VerpedidoComponent } from 'src/app/pages/verpedido/verpedido.component';

export const routes: Routes = [
  { path: 'cambiopassword', component: CambiarpasswordComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'recuperarcuenta', component: RecuperarcuentaComponent },
  { path: 'verpedido', component: VerpedidoComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];
