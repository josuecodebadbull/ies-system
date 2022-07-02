import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { MaterialModule } from '../common/module/material/material.module';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    
  ],
  providers: [AuthService]
})
export class LoginModule { }
