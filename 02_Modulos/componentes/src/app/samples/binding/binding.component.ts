import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class BindingComponent implements OnInit {
  sNombre: string;
  nAnnos: number;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
    this.nAnnos = 22;
  }

  btnBorrar() {
    this.sNombre = '';
  }

}
