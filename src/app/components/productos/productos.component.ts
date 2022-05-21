import { Component, OnInit } from '@angular/core';
import { carritoProductos } from './carritoProductos';
import {listaProductosDisponibles} from "./listaProductosDisponibles"

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos = listaProductosDisponibles;
  carrito = carritoProductos
  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto( producto : any){
    //aca llenar una segunda lista, carrito. En el Checkout vamos a acceder a esta lista de productos seleccionados
    carritoProductos.push(producto)
    console.log(carritoProductos)
  }

}
