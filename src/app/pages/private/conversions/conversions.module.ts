import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConversionsComponent } from './conversions.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ConversionsComponent }];

@NgModule({
  declarations: [
    ConversionsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ConversionsModule { }
