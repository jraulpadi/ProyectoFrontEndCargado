import { Injectable } from '@angular/core';

import { Observable, of} from 'rxjs';

import { Producto }   from './producto';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ProductoService {
  private productosUrl = 'api/productos';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getProductos(): Observable<Producto[]> {    
    return this.http.get<Producto[]>(this.productosUrl)
      .pipe(
        tap(productos => this.log('productos capturados.')),
        catchError(this.handleError('getProductos', []))
      );
  }

  getProducto(id: number): Observable<Producto> {    
    const url = `${this.productosUrl}/${id}`;
    return this.http.get<Producto>(url).pipe(
      tap(_ => this.log(`producto capturado id=${id}`)),
      catchError(this.handleError<Producto>(`getProducto id=${id}`))
    );
    //return of(PRODUCTOS.find(producto => producto.id === id ));
  }

  private log(message: string) {
    this.messageService.add(`ProductoService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} Fallida. Error: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** 
   * PUT: actualiza el producto en el servidor
   * POST: agrega producto
   * DELETE: DELETEA
   **/
  updateProducto (producto: Producto): Observable<any> {
    return this.http.put(this.productosUrl, producto, httpOptions)
      .pipe(
        tap(_ => this.log(`actualizado producto id=${producto.id}`)),
        catchError(this.handleError<any>('updateProducto'))
      )
  }

  addProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(this.productosUrl, producto, httpOptions)
      .pipe(
        tap((producto: Producto) => this.log(`agregado producto w/ id=${producto.id}`)),
        catchError(this.handleError<Producto>('addProducto'))
      );
  }

  deleteProducto(producto: Producto): Observable<Producto> {
    const id = typeof producto === 'number' ? producto : producto.id;
    const url = `${this.productosUrl}/${id}`;

    return this.http.delete<Producto>(url, httpOptions)
      .pipe(
        tap(_ => this.log(`Eliminado producto id = ${id}`)),
        catchError(this.handleError<Producto>(`deleteProducto`))
      );
  }

  /**
   * Búsqueda  
  **/

  searchProductos(term: string): Observable<Producto[]> {
    if (!term.trim()){
      return of([]);
    }

    return this.http.get<Producto[]>(`${this.productosUrl}/?nombre=${term}`)
      .pipe(
        tap(_ => this.log(`Se encontraron productos parecidos a "${term}"`)),
        catchError(this.handleError<Producto[]>('searchProductos', []))
      );
  }
}
