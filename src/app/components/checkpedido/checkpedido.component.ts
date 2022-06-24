import { Component, DoCheck, OnInit } from '@angular/core';
import { carritoProductos } from '../carrito/carritoProductos';

@Component({
  selector: 'app-checkpedido',
  templateUrl: './checkpedido.component.html',
  styleUrls: ['./checkpedido.component.css']
})
export class CheckpedidoComponent implements OnInit, DoCheck {
  total: number = 0
  carrito = carritoProductos;
  constructor() { }

  ngOnInit(): void {
  
  }

  ngDoCheck(): void {
    this.total = 0
    this.carrito.forEach(producto =>{
      this.total += producto.precio * producto.cantidadSesiones
    })
  }

}
