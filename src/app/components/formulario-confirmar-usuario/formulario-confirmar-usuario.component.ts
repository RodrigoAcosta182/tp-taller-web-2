import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

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

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      codigoConfirmacion: new FormControl('', Validators.required),
    });
  }

  activarCuenta() {
    this.codigoConfirmacion = this.formGroup.get('codigoConfirmacion')?.value;
    const dtoActivarCuenta = {
      Username: this.email,
      ConfirmationCode: this.codigoConfirmacion,
    };
    console.log(dtoActivarCuenta)
    // this.apiService.post('/confirmar-usuario', dtoActivarCuenta).subscribe(
    //   (respuesta) => {
    //     if (respuesta !== null && respuesta !== undefined) {
    //       this.loading = false;
    //       this.router.navigate(['/home']);
    //       this.error = false;
    //     }
    //   },
    //   (err) => {
    //     500;
    //     this.error = true;
    //     this.loading = false;
    //     this.errorStr = err.error.message;
    //   }
    // );
  }

  volverAlLogin() {
    this.router.navigate(['/login']);
  }
}
