import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ProductoService }  from '../producto.service';
import { Producto} from '../producto';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  @Input() 
  producto: Producto;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getProducto();  
  }

  goBack(): void {
    this.location.back();
  }
  
  getProducto(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.productoService.getProducto(id)
      .subscribe(producto => this.producto = producto);
  }

  save(): void{
    this.productoService.updateProducto(this.producto)
      .subscribe(() => this.goBack());
  }
}
