import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingComponent } from './binding/binding.component';
import { HttpModule} from '@angular/http';
import { LocalComponent } from './local/local.component';
import { PensamientosComponent } from './pensamientos/pensamientos.component';
import { PipesComponent } from './pipes/pipes.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, HttpModule
  ],
  declarations: [BindingComponent, LocalComponent, PensamientosComponent, PipesComponent],
  exports: [BindingComponent, LocalComponent, PensamientosComponent, PipesComponent]
})
export class SamplesModule { }
