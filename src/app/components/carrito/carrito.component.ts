import { Component, OnInit } from '@angular/core';
import { carritoProductos } from '../carrito/carritoProductos';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  carrito = carritoProductos;
  constructor() {}

  ngOnInit(): void {}

  quitarProducto(idproducto: any) {
    this.carrito.splice(idproducto, 1);
  }
}
