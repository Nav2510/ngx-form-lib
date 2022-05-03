import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';

import { BaseModule } from '../../core/components/base/base.module';
import { TextareaComponent } from './textarea.component';

@NgModule({
  declarations: [TextareaComponent],
  imports: [BaseModule, CommonModule, MatInputModule],
  exports: [TextareaComponent]
})
export class TextareaModule {}
