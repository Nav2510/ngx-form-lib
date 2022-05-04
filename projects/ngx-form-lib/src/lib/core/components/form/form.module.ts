import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { ContainerModule } from '../../containers/container.module';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ContainerModule,
    ReactiveFormsModule,
  ],
  exports: [FormComponent],
})
export class FormLibModule {}
