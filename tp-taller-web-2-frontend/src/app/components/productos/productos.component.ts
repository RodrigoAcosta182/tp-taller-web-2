import { Component, DoCheck, OnInit } from '@angular/core';
import { carritoProductos } from '../carrito/carritoProductos';
import { listaProductosDisponibles } from './listaProductosDisponibles';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit, DoCheck {
  productos = listaProductosDisponibles;
  carrito = carritoProductos;

  constructor() {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.productos.forEach((key: any, val: any) => {
      const busq = this.carrito.find(x => x.id == this.productos[val].id);
      if (busq) {
        this.productos[val].estado = true;
      }else{
        this.productos[val].estado = false;
      }
    });
  }

  agregarProducto(producto: any) {
    const productoYaSeleccionado = this.carrito.filter(
      (item) => item.id === producto.id
    );  
    if (productoYaSeleccionado.length > 0) {
      // productoYaSeleccionado[0].estado = true
    } else {
      carritoProductos.push(producto);
    }
  }
}
