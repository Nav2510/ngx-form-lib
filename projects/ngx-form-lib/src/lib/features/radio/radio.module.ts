import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatRadioModule } from '@angular/material/radio';

import { BaseModule } from '../../core/components/base/base.module';
import { RadioComponent } from './radio.component';

@NgModule({
  declarations: [RadioComponent],
  imports: [BaseModule, CommonModule, MatRadioModule],
  exports: [RadioComponent],
})
export class RadioModule {}
