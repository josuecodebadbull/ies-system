import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../common/module/material/material.module';
import { FormService } from './services/form.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [{ path: '', component: FormComponent }];

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[FormService]
})
export class FormModule { }
