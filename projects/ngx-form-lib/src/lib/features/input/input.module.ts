import { NgModule } from '@angular/core';

import { MatInputModule } from '@angular/material/input';

import { InputComponent } from './input.component';
import { ContainerModule } from '../../core/components/container/container.module';

@NgModule({
  declarations: [InputComponent],
  imports: [ContainerModule, MatInputModule],
  exports: [InputComponent],
})
export class InputModule {}
