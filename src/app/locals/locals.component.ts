import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';


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
    this.nombreid = localStorage.getItem('nombreid');
    this.valor = localStorage.getItem('valor');  
  }

  CargarLocalNombre(): void{
    //localStorage.setItem(this.almlocal.nombreid, this.almlocal.nombre);   

    this.nombre = localStorage.getItem('nombre');
    this.nombreid = localStorage.getItem('nombreid');
    this.valor = localStorage.getItem('valor');
  }

  BorrarLocalNombre(): void{
    //localStorage.removeItem('nombre');    

    swal({
      title: '¿Quiere borrar los datos?',
      text: 'Los datos se borraran de la memoria local',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí. Borrar',
      cancelButtonText: 'No, mantener los datos'
    }).then((result) => {
      if (result.value) {

        localStorage.removeItem('nombreid');
        localStorage.removeItem('nombre');
        localStorage.removeItem('valor');

        this.CargarLocalNombre();

        swal(
          'Borrados',
          'Los datos del LocalStorage han sido eliminados.',
          'success'
        )
      // For more information about handling dismissals please visit
      // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === swal.DismissReason.cancel) {
        swal(
          'Cancelado',
          'Los datos siguen',
          'error'
        )
      }
    })

  }

}
