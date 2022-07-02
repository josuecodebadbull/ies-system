import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { RouterModule } from '@angular/router';
import { routes } from './private-routes';



@NgModule({
  declarations: [
    PrivateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PrivateModule { }
