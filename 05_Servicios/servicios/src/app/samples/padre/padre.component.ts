import { LibrosService } from './../../servicies/libros.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;
  constructor(private libroService: LibrosService) {
    //se crea this.libroService apuntando al objeto sigleton de la clase LibrosService
  }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
    }

  btnBuscar() {
    this.aLibros = this.libroService.buscarLibros(this.sClave);
  }

}
