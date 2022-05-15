import { Component, OnInit } from '@angular/core';
import {listaProductos} from "./listaProductos"

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos = listaProductos;

  constructor() { }

  ngOnInit(): void {
  }

  agregarProducto(){
    //aca llenar una segunda lista, carrito. En el Checkout vamos a acceder a esta lista de productos seleccionados
    console.log("agregarProducto");
  }

}
