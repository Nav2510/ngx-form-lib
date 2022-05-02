import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { ContainerModule } from '../../core/components/container/container.module';
import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ButtonComponent],
  imports: [ContainerModule, MatButtonModule],
  exports: [ButtonComponent],
})
export class ButtonModule {}
