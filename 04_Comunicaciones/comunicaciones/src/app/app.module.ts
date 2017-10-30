import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SamplesModule } from './samples/samples.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SharedModule, ReactiveFormsModule, FormsModule, SamplesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
