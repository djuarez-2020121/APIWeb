import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductosServService {
  APIUrl = environment.url + '/api';

  constructor(private http: HttpClient) {}

  getProductosData() {
    return this.http.get(`${this.APIUrl}/productoes`);
  }
}
