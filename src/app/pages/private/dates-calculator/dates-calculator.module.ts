import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatesCalculatorComponent } from './dates-calculator.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: DatesCalculatorComponent }];

@NgModule({
  declarations: [
    DatesCalculatorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class DatesCalculatorModule { }
