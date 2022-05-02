import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FormComponent } from './form.component';
import { PrefixSuffixModule } from '../../../shared/components/prefix-suffix/prefix-suffix.module';

const MATERIAL_MODULES = [
  MatButtonModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
];

@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    PrefixSuffixModule,
    ReactiveFormsModule,
    ...MATERIAL_MODULES,
  ],
  exports: [FormComponent],
})
export class FormLibModule {}
