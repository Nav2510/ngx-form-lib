import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FormComponent } from './form.component';
import { ContainerModule } from '../../containers/container.module';
import { SortByOrderModule } from '../../../shared/pipes/sort-by-order/sort-by-order.module';
import { MatCheckboxModule } from '@angular/material/checkbox';


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
