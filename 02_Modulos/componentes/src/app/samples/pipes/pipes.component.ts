import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class PipesComponent implements OnInit {
  sNombre: string;
  nAnnos: number;
  oDatos;
  dFecha: Date;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
    this.nAnnos = 22.4567;
    this.oDatos = {nombre: 'Joaquin',
                  apellido: 'Franqui'
                };
    this.dFecha = new Date();
    this.dFecha.setMonth(5);
  }

  btnBorrar() {
    this.sNombre = '';
  }

}
