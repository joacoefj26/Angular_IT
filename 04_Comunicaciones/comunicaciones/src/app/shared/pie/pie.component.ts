import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  template: `
    <footer>
      <p>{{autor}} - {{lugar}}</p>
    </footer>
  `,
  styles: [`footer{
    width: 100%;
    border-top: 1px papayawhip solid;
    padding: 1em;
    }`,
    `footer p{
    text-align: center;
    font-size: S0.9em;
    color: papayawhip;
    margin: 0.5em
    }`]
})

export class PieComponent implements OnInit {

  autor: string;
  lugar: string;
  constructor() { }

  ngOnInit() {
    this.autor = 'Joaquin Franqui';
    this.lugar = 'Madrid';
  }
}
