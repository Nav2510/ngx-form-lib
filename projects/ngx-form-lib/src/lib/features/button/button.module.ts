import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { BaseModule } from '../../core/components/base/base.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [BaseModule, CommonModule, MatButtonModule, MatIconModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
