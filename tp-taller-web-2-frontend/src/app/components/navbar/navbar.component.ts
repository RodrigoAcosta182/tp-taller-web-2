import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { carritoProductos } from '../carrito/carritoProductos';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, DoCheck {
  isLogged!: Boolean;
  isAdmin!: Boolean;
  carrito = carritoProductos;
  constructor(protected router: Router, private cookieService: CookieService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    this.isLogged = this.cookieService.check('token_access');
    if (this.cookieService.get('rol') === 'AdminGarlop') {
      this.isAdmin = true;
    } else {
      this.isAdmin = false;
    }
  }

  irAVerPedido() {
    this.router.navigate(['/verpedido']);
  }
  irAHome() {
    this.router.navigate(['/home']);
  }

  Logout() {
    this.cookieService.delete('token_access');
    this.cookieService.delete('rol');
    this.router.navigate(['/']);
  }

  irANuevoProducto() {
    this.router.navigate(['/nuevoproducto']);
  }
}
