import { LibrosService } from './libros.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    LibrosService
  ],
})
export class ServiciesModule { }
