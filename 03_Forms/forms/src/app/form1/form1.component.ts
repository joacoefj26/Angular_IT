import { Component, OnInit, ViewChild } from '@angular/core';

interface Usuario {
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface Departamentos {
  nombre: string;
  codigo: number ;
}
@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  oUsuario: Usuario;
  selectPrinter: string;
  aPrinters: Array<string>;
  aDepartamentos: Array<Departamentos>;
  isClaro: boolean;
  isColor: boolean;
  deprtamentoSeleccionado: Departamentos;
  @ViewChild('myform') formLocal: any;

  constructor() { }

  ngOnInit() {
    this.oUsuario = {lastName: 'Franqui', firstName: 'Joaquin', phoneNumber: '555555555' };
    this.aPrinters = ['HP', 'Canon', 'Lexmark'];
    this.isClaro = false;
    this.isColor = false;
    this.aDepartamentos = [
      {nombre : 'Marketing', codigo: 22},
      {nombre : 'Ventas', codigo: 23},
      {nombre : 'IT', codigo: 24}
    ];
    this.deprtamentoSeleccionado = null;
  }

  avisarPrint() {
    console.log(this.isColor);
  }

  avisarDepartamento() {
    console.log(this.deprtamentoSeleccionado);
  }

  enviar() {
    console.log(this.formLocal);
  }

  borrar() {
    console.log('Borrar');
  }

}
