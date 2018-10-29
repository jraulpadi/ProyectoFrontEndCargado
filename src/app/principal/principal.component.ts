import { Component, OnInit } from '@angular/core';
import { Producto } from '../Producto';
import { ProductoService }  from '../producto.service';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  //selectedProducto: Producto;

  productos: Producto[];
 
  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProductos();
  }
  /*
  onSelect(producto: Producto): void {
    this.selectedProducto = producto;
  }
  */
  getProductos(): void {
    this.productoService.getProductos()
        .subscribe(productos => this.productos = productos);
  }

  add(nombre: string, id: number, valor: number ): void{
    nombre = nombre.trim();
    //id = Number(id);
    if(!nombre){return;}
    this.productoService.addProducto({id, nombre, valor} as Producto)
      .subscribe(producto=>{
        //console.log(producto[0]);
        //this.productos.push(producto);
        this.getProductos();
      })
  }

  delete(producto: Producto): void {
    this.productos = this.productos.filter(p => p != producto);
    this.productoService.deleteProducto(producto)
      .subscribe();
  }

}