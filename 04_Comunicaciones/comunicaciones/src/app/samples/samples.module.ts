import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { HttpModule} from '@angular/http';
import { SamplesComponent } from './samples.component';
import { HijosComponent } from './hijos/hijos.component';
import { PadreComponent } from './padre/padre.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule
  ],
  declarations: [BindingComponent, SamplesComponent, HijosComponent, PadreComponent],
  exports: [BindingComponent, HijosComponent, PadreComponent]
})
export class SamplesModule { }
