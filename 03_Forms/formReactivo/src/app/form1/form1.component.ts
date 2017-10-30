import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  public formGrup1: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGrup1 = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.email]],
      autor: ['', [Validators.required, Validators.maxLength(12)]],
      editorial: [],
      fecha: ['2017']
    });

    console.log(this.formGrup1);
  }

  enviar() {
  }

  borrar() {
  }

}
