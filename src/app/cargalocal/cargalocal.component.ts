import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cargalocal',
  templateUrl: './cargalocal.component.html',
  styleUrls: ['./cargalocal.component.css']
})
export class CargalocalComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,    
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  cambiarlocal(nombreid: string, nombre:string, valor:string): void{
    if(nombreid.length>0){
      localStorage.setItem('nombreid', nombreid);
    }
    if(nombre.length>0){
      localStorage.setItem('nombre', nombre);
    }
    if(valor.length>0){
      localStorage.setItem('valor', valor);
    }

    this.goBack();
  }

}
