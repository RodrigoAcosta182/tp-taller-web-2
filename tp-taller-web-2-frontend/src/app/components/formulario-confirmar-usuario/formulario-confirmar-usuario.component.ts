import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { cuentaConfirmar } from './cuentaConfirmar';
import { mensajeConfirmar } from './mensajeConfirmar';

@Component({
  selector: 'app-formulario-confirmar-usuario',
  templateUrl: './formulario-confirmar-usuario.component.html',
  styleUrls: ['./formulario-confirmar-usuario.component.css'],
})
export class FormularioConfirmarUsuarioComponent implements OnInit {
  formGroup!: FormGroup;
  codigoConfirmacion!: string;
  email!: string;
  loading!: Boolean;
  error!: Boolean;
  errorStr!: string;
  successStr!: string;
  success!: Boolean;
  envio!: Boolean;

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      codigoConfirmacion: new FormControl('', Validators.required),
    });
    if (cuentaConfirmar.usuario === '') {
      this.router.navigate(['/login']);
    }
  }

  activarCuenta() {
    this.codigoConfirmacion = this.formGroup.get('codigoConfirmacion')?.value;
    const dtoActivarCuenta = {
      Username: cuentaConfirmar.usuario,
      ConfirmationCode: this.codigoConfirmacion,
    };
    if (this.codigoConfirmacion !== '') {
      this.apiService.post('/confirmar-usuario', dtoActivarCuenta).subscribe(
        (respuesta) => {
          if (respuesta !== null && respuesta !== undefined) {
            this.loading = false;
            this.error = false;
            this.envio = false;
            this.success = true;
            this.successStr = 'Usuario confirmado correctamente';
            setTimeout(() => {
              this.successStr = '';
              this.success = false;
              this.router.navigate(['/home']);
            }, 3000);
          }
        },
        (err) => {
          500;
          this.error = true;
          this.loading = false;
          this.success = false;
          this.errorStr = err.error.message;
        }
      );
    } else {
      this.envio = true;
    }
  }
  volverAlLogin() {
    this.router.navigate(['/login']);
  }
}
