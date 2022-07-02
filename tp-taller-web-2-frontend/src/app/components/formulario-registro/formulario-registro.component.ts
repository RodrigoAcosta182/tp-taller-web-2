import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css'],
})
export class FormularioRegistroComponent implements OnInit {
  formGroup!: FormGroup;
  nombre!: String;
  direccion!: String;
  email!: String;
  password!: String;
  successStr!: String;
  envio!: Boolean;
  loading!: Boolean;
  success!: Boolean;
  

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      direccion: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  onRegistrar() {
    this.nombre = this.formGroup.get('nombre')?.value;
    this.direccion = this.formGroup.get('direccion')?.value;
    this.email = this.formGroup.get('email')?.value;
    this.password = this.formGroup.get('password')?.value;

    if (
      this.nombre != '' &&
      this.password != '' &&
      this.email != '' &&
      this.direccion != ''
    ) {
      const usuarioDto = {
        nombre: this.nombre,
        password: this.password,
        email: this.email,
        direccion: this.direccion,
      };
      this.apiService
        .post('/registrar-usuario', usuarioDto)
        .subscribe((respuesta) => {
          if (respuesta !== null && respuesta !== undefined) {
            this.loading = false;
            this.envio = false;
            this.success = true;
            this.successStr = 'Usuario registrado correctamente';
            setTimeout(() => {
              this.successStr = '';
              this.success = false;
              this.router.navigate(['/home']);
            }, 3000);
          }
        });
    } else {
      this.envio = true;
    }
  }
  get name() {
    return this.formGroup.get('nombre');
  }

  volverAlLogin() {
    this.router.navigate(['/login']);
  }
}
