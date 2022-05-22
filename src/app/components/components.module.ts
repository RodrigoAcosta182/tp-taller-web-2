import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { FormulariopagoComponent } from './formulariopago/formulariopago.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { CarritoComponent } from './carrito/carrito.component';
import { ToasterComponent } from './toaster/toaster.component';
import { FormularioRecuperarCuentaComponent } from './formulario-recuperar-cuenta/formulario-recuperar-cuenta.component';

// en exports voy agregando los componentes

@NgModule({
  declarations: [NavbarComponent, ProductosComponent, FormulariopagoComponent, FormularioRegistroComponent, CarritoComponent, ToasterComponent, FormularioRecuperarCuentaComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, ProductosComponent, FormulariopagoComponent,FormularioRegistroComponent,CarritoComponent, ToasterComponent, FormularioRecuperarCuentaComponent],
})
export class ComponentsModule {}
