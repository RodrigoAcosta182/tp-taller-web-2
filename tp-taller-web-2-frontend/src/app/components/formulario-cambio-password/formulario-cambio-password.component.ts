import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formulario-cambio-password',
  templateUrl: './formulario-cambio-password.component.html',
  styleUrls: ['./formulario-cambio-password.component.css']
})
export class FormularioCambioPasswordComponent implements OnInit {

  formGroup!: FormGroup;
  password!: String;
  repassword!: String;

  constructor(protected router:Router, private formBuilder: FormBuilder, protected httpClient: HttpClient) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      password: new FormControl('',  Validators.required),
      repassword: new FormControl('',  Validators.required),
    });
    
  }

  cambiarPassword(){

    this.password = this.formGroup.get("password")?.value;
    this.repassword = this.formGroup.get("repassword")?.value;

    if (this.password != this.repassword){
      console.log("Las contraseñas deben ser iguales");
    }

    console.log(this.password)
  }

}
