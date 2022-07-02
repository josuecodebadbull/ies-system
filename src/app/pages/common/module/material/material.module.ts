import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatProgressBarModule
  ]
})
export class MaterialModule { }
