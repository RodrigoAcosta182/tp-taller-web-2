import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-recuperar-cuenta',
  templateUrl: './formulario-recuperar-cuenta.component.html',
  styleUrls: ['./formulario-recuperar-cuenta.component.css']
})
export class FormularioRecuperarCuentaComponent implements OnInit {

  constructor( protected router : Router) { }

  ngOnInit(): void {
  }

  volverAlLogin(){
    this.router.navigate(["/login"])
  }

}
