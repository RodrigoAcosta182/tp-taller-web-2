import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from './signup/signup.component';

import { CambiarpasswordComponent } from './cambiarpassword/cambiarpassword.component';
import { RecuperarcuentaComponent } from './recuperarcuenta/recuperarcuenta.component';
import { VerpedidoComponent } from './verpedido/verpedido.component';
import { ConfirmarusuarioComponent } from './confirmarusuario/confirmarusuario.component';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    CheckoutComponent,
    SignupComponent,
    CambiarpasswordComponent,
    RecuperarcuentaComponent,
    VerpedidoComponent,
    ConfirmarusuarioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
  ],
})
export class PagesModule {}
