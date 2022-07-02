import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from 'src/app/services/api/api.service';
import { carritoProductos } from '../carrito/carritoProductos';

@Component({
  selector: 'app-checkpedido',
  templateUrl: './checkpedido.component.html',
  styleUrls: ['./checkpedido.component.css'],
})
export class CheckpedidoComponent implements OnInit, DoCheck {
  total: number = 0;
  carrito = carritoProductos;
  success!: Boolean;
  successStr!: String;

  constructor(private apiService: ApiService, private router: Router, private cookieService : CookieService) {}

  ngOnInit(): void {
    //reset las sesiones cuando entro al carrito
    this.carrito.forEach((producto) => {
      producto.cantidadSesiones = 1;
    });
  }

  ngDoCheck(): void {
    //calcula el total
    this.total = 0;
    this.carrito.forEach((producto) => {
      this.total += producto.precio * producto.cantidadSesiones;
    });
  }

  finalizarCompra(carrito: any) {
    const dtoCompra = {
      usuario: this.cookieService.get("token_access"),
      productos: carrito,
      total: this.total,
    };
    this.apiService.post('/finalizar-compra-producto', dtoCompra).subscribe(
      (respuesta) => {
        if (respuesta !== null && respuesta !== undefined) {
          this.success = true;
          this.successStr = respuesta as string;
          setTimeout(() => {
            this.success = false;
            this.successStr = '';
          }, 5000);
        }
      },
      (err) => {
        500;
        this.success = false;
      }
    );
  }
}
