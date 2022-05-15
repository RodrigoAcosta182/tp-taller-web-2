import { Injectable } from '@angular/core';
import { ILogin } from '../../models/login.interface';
import { IResponse } from '../../models/response.interface';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor( private http:HttpClient) { }
}
