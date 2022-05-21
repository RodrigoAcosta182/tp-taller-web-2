import { Component, OnInit } from '@angular/core';
import { carritoProductos } from '../productos/carritoProductos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  carrito = carritoProductos
  constructor() { }

  ngOnInit(): void {
  }

}
