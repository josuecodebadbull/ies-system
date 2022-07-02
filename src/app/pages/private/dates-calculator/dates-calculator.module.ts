import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatesCalculatorComponent } from './dates-calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../common/module/material/material.module';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: DatesCalculatorComponent }];

@NgModule({
  declarations: [
    DatesCalculatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DatesCalculatorModule { }
