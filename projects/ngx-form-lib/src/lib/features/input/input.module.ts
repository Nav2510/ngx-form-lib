import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';

import { BaseModule } from '../../core/components/base/base.module';
import { InputComponent } from './input.component';

@NgModule({
  declarations: [InputComponent],
  imports: [BaseModule, CommonModule, MatInputModule],
  exports: [InputComponent],
})
export class InputModule {}
