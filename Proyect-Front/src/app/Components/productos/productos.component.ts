import { Component, OnInit } from '@angular/core';
import { ProductosServService } from 'src/app/Services/productos-serv.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  productos: any = [];

  constructor(private productosService: ProductosServService) {}

  ngOnInit(): void {
    this.getProductos();
  }

  getProductos() {
    this.productosService.getProductosData().subscribe((data) => {
      this.productos = data;
      console.log(this.productos);
    });
  }
}
