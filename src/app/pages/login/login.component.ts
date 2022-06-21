import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/api/api.service';
import { CookieService } from 'ngx-cookie-service';

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
  

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      usuario: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      recordardatos: new FormControl(false, Validators.required),
    });
  }

  onLogin() {
    this.usuario = this.formGroup.get('usuario')?.value;
    this.password = this.formGroup.get('password')?.value;
    this.recordardatos = this.formGroup.get('recordardatos')?.value;
    if (this.usuario != '' && this.password != '') {
      // console.log(this.usuario);
      // console.log(this.password);
      // console.log('recordardatos' + this.recordardatos);
      const usuarioDto = {
        email: this.usuario,
        password: this.password,
      };
      this.apiService
        .post('http://localhost:3000/login-usuario', usuarioDto)
        .subscribe((respuesta) => {
          if (respuesta !== null && respuesta !== undefined) {
            this.authToken = respuesta
            this.cookieService.set("token_access", this.authToken,4,"/")
            this.router.navigate(["/home"])
          }
        });
    } else {
      alert('los campos usuario o password no pueden estar vacios');
    }
  }

  irARegistro() {
    this.router.navigate(['/signup']);
  }
  irARecuperarCuenta() {
    this.router.navigate(['/recuperarcuenta']);
  }
}
