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
    console.log(this.productos)
  }

  

}
