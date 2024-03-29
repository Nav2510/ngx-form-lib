import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatSelectModule } from '@angular/material/select';

import { FormComponent } from './form.component';
import { ContainerModule } from '../../containers/container.module';
import { SortByOrderModule } from '../../../shared/pipes/sort-by-order/sort-by-order.module';


@NgModule({
  declarations: [FormComponent],
  imports: [
    CommonModule,
    ContainerModule,
    ReactiveFormsModule,
    SortByOrderModule,
    MatSelectModule
  ],
  exports: [FormComponent],
})
export class FormLibModule {}
