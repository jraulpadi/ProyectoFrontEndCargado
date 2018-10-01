import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Producto } from '../producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto-search',
  templateUrl: './producto-search.component.html',
  styleUrls: ['./producto-search.component.css']
})
export class ProductoSearchComponent implements OnInit {
  productos$: Observable<Producto[]>;
  
  private searchTerms = new Subject<string>();

  constructor(private productoService: ProductoService) { }

  search(term: string): void{
    this.searchTerms.next(term);
  }

  ngOnInit() {
    this.productos$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.productoService.searchProductos(term)),
    );
  }

}
