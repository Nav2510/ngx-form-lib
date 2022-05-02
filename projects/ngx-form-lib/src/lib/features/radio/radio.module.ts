import { NgModule } from '@angular/core';

import { MatRadioModule } from '@angular/material/radio';

import { RadioComponent } from './radio.component';
import { ContainerModule } from '../../core/components/container/container.module';

@NgModule({
  declarations: [RadioComponent],
  imports: [ContainerModule, MatRadioModule],
  exports: [RadioComponent],
})
export class RadioModule {}
