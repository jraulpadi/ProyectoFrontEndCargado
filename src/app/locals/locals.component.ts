import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-locals',
  templateUrl: './locals.component.html',
  styleUrls: ['./locals.component.css']
})

export class LocalsComponent implements OnInit {

  nombre: string;
  nombreid: string;
  nommbredesc: string;
  valor: string;   

  constructor() { }

  ngOnInit() {    
    /*
    this.nombreid = 'nombre';
    this.nombre = 'Julio Raúl Padilla';
    this.valor = 'Activo';
    */

    this.nombre = localStorage.getItem('nombre');   
  }

  CargarLocalNombre(): void{
    localStorage.setItem('nombreid', 'Nombre');
    localStorage.setItem('nombre', 'Julio Raúl Padilla');
    localStorage.setItem('valor', 'Programador');
    //localStorage.setItem(this.almlocal.nombreid, this.almlocal.nombre);   

    this.nombre = localStorage.getItem('nombre');
    this.nombreid = localStorage.getItem('nombreid');
    this.valor = localStorage.getItem('valor');
  }

  BorrarLocalNombre(): void{
    localStorage.removeItem('nombre');
    this.nombre = '';
  }

}
