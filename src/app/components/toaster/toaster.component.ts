import { Component, OnInit } from '@angular/core';
import { toaster } from './toaster';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css'],
})
export class ToasterComponent implements OnInit {
  toaster = toaster;
  constructor() {}

  ngOnInit(): void {}

  showToaster(data: any, tipo: any) {
    this.toaster.show = true;
    this.toaster.data = data;
    this.toaster.tipo = tipo;
    setTimeout(() => {
      this.toaster.show = false;
      this.toaster.data = '';
      this.toaster.tipo = '';
    }, 2000);
  }
}
