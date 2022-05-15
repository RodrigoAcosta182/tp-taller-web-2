import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  recordardatos!: Boolean;

  constructor(
    protected router: Router,
    private formBuilder: FormBuilder,
    protected httpClient: HttpClient
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
    if (this.usuario != '' && this.password != "") {
      console.log(this.usuario);
      console.log(this.password);
      console.log(this.recordardatos);
      //Aca tendria que buscar la manera de validar los datos antes de hacer el navigate
      this.router.navigate(["/home"])
    } else {
      console.log("los campos usuario o password no pueden estar vacios");
    }
  }
}
