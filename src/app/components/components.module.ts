import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { FormulariopagoComponent } from './formulariopago/formulariopago.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ToasterComponent } from './toaster/toaster.component';
import { FormularioRecuperarCuentaComponent } from './formulario-recuperar-cuenta/formulario-recuperar-cuenta.component';
import { FormularioCambioPasswordComponent } from './formulario-cambio-password/formulario-cambio-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CheckpedidoComponent } from './checkpedido/checkpedido.component';
import { FormularioConfirmarUsuarioComponent } from './formulario-confirmar-usuario/formulario-confirmar-usuario.component';

// en exports voy agregando los componentes

@NgModule({
  declarations: [
    NavbarComponent,
    ProductosComponent,
    FormulariopagoComponent,
    FormularioRegistroComponent,
    CarritoComponent,
    ToasterComponent,
    FormularioRecuperarCuentaComponent,
    FormularioCambioPasswordComponent,
    CheckpedidoComponent,
    FormularioConfirmarUsuarioComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, BrowserModule],
  exports: [
    NavbarComponent,
    ProductosComponent,
    FormulariopagoComponent,
    FormularioRegistroComponent,
    CarritoComponent,
    ToasterComponent,
    FormularioRecuperarCuentaComponent,
    FormularioCambioPasswordComponent,
    CheckpedidoComponent,
    FormularioConfirmarUsuarioComponent
  ],
})
export class ComponentsModule {}
