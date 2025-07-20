import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';

import { BaseModule } from '../../core/components/base/base.module';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [BaseModule, CommonModule, MatSelectModule, MatAutocompleteModule],
  exports: [DropdownComponent],
})
export class DropdownModule {}
