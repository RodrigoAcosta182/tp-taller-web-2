import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { carritoProductos } from '../carrito/carritoProductos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  carrito = carritoProductos
  constructor(
    protected router: Router,
  ) {}

  ngOnInit(): void {
  }

  irAVerPedido(){
    this.router.navigate(["/verpedido"])
  }
  irAHome(){
    this.router.navigate(["/home"])
  }
}

