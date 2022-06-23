import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { carritoProductos } from '../carrito/carritoProductos';
@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  formGroup!: FormGroup;
  precioFinalProducto!: Number;
  carrito = carritoProductos;
  cantidadSesiones: any = [1, 2, 3, 4, 5, 6];
  cantidadSeleccionada : any = 1
  constructor(protected router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      cantidadSesionesForm: new FormControl('', Validators.required),
    });
  }

  quitarProducto(idproducto: any) {
    this.carrito.splice(idproducto, 1);
  }

  onChangeSesiones(e: any) {
    
    this.cantidadSeleccionada = e.target.value 
  }
}
