import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseTextFieldComponent } from './base-text-field.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BaseTextFieldComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    BaseTextFieldComponent,
  ],
})
export class BaseTextFieldModule { }
