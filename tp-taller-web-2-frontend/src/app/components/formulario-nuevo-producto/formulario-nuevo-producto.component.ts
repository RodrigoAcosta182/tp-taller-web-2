import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-formulario-nuevo-producto',
  templateUrl: './formulario-nuevo-producto.component.html',
  styleUrls: ['./formulario-nuevo-producto.component.css'],
})
export class FormularioNuevoProductoComponent implements OnInit {
  formGroup!: FormGroup;
  nombre!: String;
  imagen!: String;
  detalles!: String;
  precio!: Number;
  loading!: Boolean;
  isLogged!: Boolean;
  errorStr!: String;
  base64textString!: String;
  error!: Boolean;
  base64!: String;
  fileSelected?: Blob;
  imageUrl!: String;

  constructor(
    private router: Router,
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private sant: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      nombre: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
      detalles: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
    });
  }

  agregarNuevoProducto() {
    this.loading = true;
    this.nombre = this.formGroup.get('nombre')?.value;
    this.imagen = this.formGroup.get('imagen')?.value;
    this.detalles = this.formGroup.get('detalles')?.value;
    this.precio = this.formGroup.get('precio')?.value;
    if (this.nombre != '') {
      const productoDto = {
        nombre: this.nombre,
        imagen: this.imagen,
        detalles: this.detalles,
        precio: this.precio,
        cantidadSesiones: 0,
        estado: false,
      };
      console.log(productoDto);
      // this.apiService.post('/agregar-producto', productoDto).subscribe(
      //   (respuesta) => {
      //     if (respuesta !== null && respuesta !== undefined) {
      //       this.loading = false;
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
    } else {
      alert('los campos usuario o password no pueden estar vacios');
      this.loading = false;
    }
  }

  volverAlHome() {
    this.router.navigate(['/home']);
  }

  handleFileSelect(file: File) {
    this.fileSelected = file;
    // this.imageUrl = this.sant.bypassSecurityTrustUrl(
    //   window.URL.createObjectURL(this.fileSelected)
    // ) as string;
    const reader = new FileReader();
    reader.readAsDataURL(this.fileSelected as Blob);
    reader.onloadend = () =>{
      this.base64 = reader.result as string;
      console.log(this.base64)
    }

  }

  // imagenToBase64(): void {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(this.fileSelected as Blob);
  //   reader.onloadend = () =>{
  //     this.base64 = reader.result as string;
  //   }
  // }
}
