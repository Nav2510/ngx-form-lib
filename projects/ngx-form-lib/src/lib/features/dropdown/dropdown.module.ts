import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { BaseModule } from '../../core/components/base/base.module';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [BaseModule, CommonModule, MatSelectModule, MatAutocompleteModule],
  exports: [DropdownComponent],
})
export class DropdownModule {}
