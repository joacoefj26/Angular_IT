import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijos',
  templateUrl: './hijos.component.html',
  styleUrls: ['./hijos.component.css']
})
export class HijosComponent implements OnInit {

  @Input() sMiName: string;
  @Output() eventBorrar = new EventEmitter<string>();
  sNombreSelect: string;
  constructor() {
  }

  ngOnInit() {
  }

  btnBorrar() {
    this.sMiName = this.sNombreSelect;
    this.eventBorrar.emit(this.sNombreSelect);
  }
}
