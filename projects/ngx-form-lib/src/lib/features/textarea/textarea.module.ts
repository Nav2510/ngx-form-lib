import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';

import { TextareaComponent } from './textarea.component';
import { ContainerModule } from '../../core/components/container/container.module';

@NgModule({
  declarations: [TextareaComponent],
  imports: [ContainerModule, MatInputModule],
  exports: [TextareaComponent]
})
export class TextareaModule {}
