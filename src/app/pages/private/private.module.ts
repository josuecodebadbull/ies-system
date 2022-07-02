import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { RouterModule } from '@angular/router';
import { routes } from './private-routes';
import { NavbarModule } from './share/navbar/navbar.module';



@NgModule({
  declarations: [
    PrivateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NavbarModule
  ]
})
export class PrivateModule { }
