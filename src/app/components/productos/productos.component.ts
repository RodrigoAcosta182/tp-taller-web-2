import { Component, OnInit } from '@angular/core';
import { carritoProductos } from '../carrito/carritoProductos';
import { listaProductosDisponibles } from './listaProductosDisponibles';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos = listaProductosDisponibles;
  carrito = carritoProductos;
  constructor() {}

  ngOnInit(): void {}

  agregarProducto(producto: any) {
    //aca llenar una segunda lista, carrito. En el Checkout vamos a acceder a esta lista de productos seleccionados
    const productoYaSeleccionado = this.carrito.filter(
      (item) => item.id === producto.id
    );
    if (productoYaSeleccionado.length > 0) {
      console.log('Este producto ya se encuentra en el carrito');
    } else {
      carritoProductos.push(producto);
    }
  }

  
}
