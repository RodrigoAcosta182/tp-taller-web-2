import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { FormulariopagoComponent } from './formulariopago/formulariopago.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';

// en exports voy agregando los componentes

@NgModule({
  declarations: [NavbarComponent, ProductosComponent, FormulariopagoComponent, FormularioRegistroComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, ProductosComponent, FormulariopagoComponent,FormularioRegistroComponent],
})
export class ComponentsModule {}
