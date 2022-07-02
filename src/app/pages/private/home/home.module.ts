import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CambioLetrasPipe } from '../../common/pipes/cambio-letras.pipe';
import { MaterialModule } from '../../common/module/material/material.module';
import { ModalNameModule } from '../share/modal-name/modal-name.module';

const routes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [
    HomeComponent,
    CambioLetrasPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    ModalNameModule
  ]
})
export class HomeModule { }
