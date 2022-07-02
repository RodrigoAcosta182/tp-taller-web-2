import { Component, DoCheck, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { carritoProductos } from '../carrito/carritoProductos';
import { listaProductosDisponibles } from './listaProductosDisponibles';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit, DoCheck {
  // productos = listaProductosDisponibles;
  productos: any;
  carrito = carritoProductos;
  data: any;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.get('/obtener-productos').subscribe(
      (respuesta) => {
        if (respuesta !== null && respuesta !== undefined) {
          this.data = respuesta;
          this.productos = this.data.productos;
        }
      },
      (err) => {
        500;
      }
    );
  }

  ngDoCheck(): void {
    this.productos.forEach((key: any, val: any) => {
      const busq = this.carrito.find((x) => x._id == this.productos[val]._id);
      if (busq) {
        this.productos[val].estado = true;
      } else {
        this.productos[val].estado = false;
      }
    });
  }

  agregarProducto(producto: any) {
    const productoYaSeleccionado = this.carrito.filter(
      (item) => item._id === producto.id
    );
    if (productoYaSeleccionado.length > 0) {
      // productoYaSeleccionado[0].estado = true
    } else {
      carritoProductos.push(producto);
    }
  }
}
