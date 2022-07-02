import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { CookieService } from 'ngx-cookie-service';
import { cuentaConfirmar } from 'src/app/components/formulario-confirmar-usuario/cuentaConfirmar';
import { mensajeConfirmar } from 'src/app/components/formulario-confirmar-usuario/mensajeConfirmar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  title = 'taller';

  formGroup!: FormGroup;
  usuario!: String;
  password!: String;
  authToken!: any;
  recordardatos!: Boolean;
  loading!: Boolean;
  isLogged!: Boolean;
  errorStr!: String;
  error!: Boolean;
  mensaje!: String;
  strSuccess!: Boolean;

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.isLogged = this.cookieService.check('token_access');
    if (this.isLogged) {
      this.router.navigate(['/home']);
    }
    this.formGroup = this.formBuilder.group({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      recordardatos: new FormControl(false, Validators.required),
    });
  }



  onLogin() {
    this.loading = true;
    this.usuario = this.formGroup.get('usuario')?.value;
    this.password = this.formGroup.get('password')?.value;
    this.recordardatos = this.formGroup.get('recordardatos')?.value;
    if (this.usuario != '' && this.password != '') {
      const usuarioDto = {
        email: this.usuario,
        password: this.password,
      };
      this.apiService.post('/login-usuario', usuarioDto).subscribe(
        (respuesta) => {
          if (respuesta !== null && respuesta !== undefined) {
            this.loading = false;
            this.authToken = respuesta;
            this.cookieService.set('token_access', this.authToken.Token, 4, '/');
            this.cookieService.set('rol', this.authToken.Rol, 4, '/');
            this.router.navigate(['/home']);
            this.error = false;
          }
        },
        (err) => {
          500;
          this.error = true;
          this.loading = false;
          if (err.error.code != 'UserNotConfirmedException') {
            alert(err.error.code);
          } else {
            this.router.navigate(['/confirmarusuario']);
            cuentaConfirmar.usuario = this.usuario;
          }
          this.errorStr = err.error.message;
        }
      );
    } else {
      alert('los campos usuario o password no pueden estar vacios');
      this.loading = false;
    }
  }

  irARegistro() {
    this.router.navigate(['/signup']);
  }
  irARecuperarCuenta() {
    this.router.navigate(['/recuperarcuenta']);
  }

}
