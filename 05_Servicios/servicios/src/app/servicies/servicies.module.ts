import { GoogleService } from './google.service';
import { LibrosService } from './libros.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LibrosService, GoogleService
  ],
})
export class ServiciesModule { }
