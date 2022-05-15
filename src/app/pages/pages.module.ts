import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ComponentsModule } from '../components/components.module';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, CheckoutComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule,ComponentsModule],
})
export class PagesModule {}
