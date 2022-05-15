import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductosComponent } from './productos/productos.component';

// en exports voy agregando los componentes

@NgModule({
  declarations: [NavbarComponent, ProductosComponent],
  imports: [CommonModule],
  exports: [NavbarComponent, ProductosComponent],
})
export class ComponentsModule {}
