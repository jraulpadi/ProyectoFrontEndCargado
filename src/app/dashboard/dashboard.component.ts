import { Component, OnInit } from '@angular/core';
import { Producto } from '../producto';
import { ProductoService } from '../producto.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  productos: Producto[] = [];
 
  constructor(private productoService: ProductoService) { }
 
  ngOnInit() {
    this.getProductos();
  }
 
  getProductos(): void {
    this.productoService.getProductos()
      .subscribe(productos => this.productos = productos.slice(1, 5));
  }
}