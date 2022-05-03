import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { BaseModule } from '../../core/components/base/base.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [BaseModule, CommonModule, MatButtonModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
