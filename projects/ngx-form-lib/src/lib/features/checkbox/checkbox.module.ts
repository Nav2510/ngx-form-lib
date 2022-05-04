import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { BaseModule } from '../../core/components/base/base.module';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [BaseModule, CommonModule, MatCheckboxModule],
  exports: [CheckboxComponent]
})
export class CheckboxModule {}
