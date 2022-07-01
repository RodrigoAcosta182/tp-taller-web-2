import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl!: String;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/api';
  }

  public get(url: string) {
    return this.http.get(url);
  }

  public post(url: string, body: any) {
    return this.http.post(this.baseUrl + url, body);
  }
}
