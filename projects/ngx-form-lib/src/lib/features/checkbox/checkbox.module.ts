import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';

import { ContainerModule } from '../../core/components/container/container.module';
import { CheckboxComponent } from './checkbox.component';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [ContainerModule, MatCheckboxModule],
  exports: [CheckboxComponent]
})
export class CheckboxModule {}
