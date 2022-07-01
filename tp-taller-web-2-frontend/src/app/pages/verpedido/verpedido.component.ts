import { Component, OnInit } from '@angular/core';
import { carritoProductos } from 'src/app/components/carrito/carritoProductos';

@Component({
  selector: 'app-verpedido',
  templateUrl: './verpedido.component.html',
  styleUrls: ['./verpedido.component.css']
})
export class VerpedidoComponent implements OnInit {

  carrito = carritoProductos;
  constructor() { }

  ngOnInit(): void {
  }

}
