import { Http, Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

const URL = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  sClave: string;
  aLibros: Array<string>;
  constructor(private http: Http) {
  }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
    }

  btnBuscar() {
    this.http.get(URL + this.sClave).subscribe(
      response => {
        const data = response.json();
        data.items.forEach(element => {
          this.aLibros.push(element.volumeInfo.title);
        });
        //for (let i = 0; i < data.items.length; i++) {
        //const bookTitle = data.items[i].volumeInfo.title;
        //this.aLibros.push(bookTitle);
        //}
      },
      error => console.error(error)
    );
  }

}
