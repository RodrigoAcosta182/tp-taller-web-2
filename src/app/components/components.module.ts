import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';
import { FormulariopagoComponent } from './formulariopago/formulariopago.component';

// en exports voy agregando los componentes

@NgModule({
  declarations: [NavbarComponent, ProductosComponent, FormulariopagoComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, ProductosComponent, FormulariopagoComponent],
})
export class ComponentsModule {}
