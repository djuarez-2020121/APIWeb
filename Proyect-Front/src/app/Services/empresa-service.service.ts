import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaServiceService {

  readonly APIUrl = 'https://localhost:7281/api';

  constructor(
    private http: HttpClient
  ) { }

  //Proveedor
  //Obtener todas los proveedors
  getProveedorList() {
     
    return this.http.get(this.APIUrl + '/proveedors');
    
  }

  //Agregar un proveedors
  addProveedor(data: any) {
    return this.http.post(this.APIUrl + '/Proveedors', data);
  }

  //Actualizar el proveedors
  updateProveedor(id: number | string, data: any) {
    return this.http.put(this.APIUrl + `/Proveedors/${id}`, data);
  }

  //Eliminar un proveedors 
  deleteProveedor(id: number | string) {
    return this.http.delete(this.APIUrl + `/Proveedors/${id}`);
  }




  //Empresa
  //Obtener todas las empresas
  getEmpresaList() {
    console.log(this.getEmpresaList());
    return this.http.get(this.APIUrl + '/empresas');
  }

  //Agregar una Empresa
  addEmpresa(data: any) {
    return this.http.post(this.APIUrl + '/Empresas', data);
  }

  //Actualizar la empresa
  updateEmpresa(id: number | string, data: any) {
    return this.http.put(this.APIUrl + `/Empresas/${id}`, data);
  }

  //Eliminar una empresa 
  deleteEmpresa(id: number | string) {
    return this.http.delete(this.APIUrl + `/Empresas/${id}`);
  }


  //Producto
  //Obtener todos los productos
  getProductoList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Productoes');
  }

  //Agregar un Producto
  addProducto(data: any) {
    return this.http.post(this.APIUrl + '/Productoes', data);
  }

  //Actualizar el producto
  updateProducto(id: number | string, data: any) {
    return this.http.put(this.APIUrl + `/Productoes/${id}`, data);
  }

  //Eliminar el producto 
  deleteProducto(id: number | string) {
    return this.http.delete(this.APIUrl + `/Productoes/${id}`);
  }


}
