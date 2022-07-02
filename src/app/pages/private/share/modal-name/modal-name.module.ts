import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalNameComponent } from './modal-name.component';
import { MaterialModule } from 'src/app/pages/common/module/material/material.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [ModalNameComponent],
  entryComponents: [ModalNameComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ]
})
export class ModalNameModule { }
