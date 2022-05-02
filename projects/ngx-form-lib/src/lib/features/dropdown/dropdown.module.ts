import { NgModule } from '@angular/core';

import { MatSelectModule } from '@angular/material/select';

import { ContainerModule } from '../../core/components/container/container.module';
import { DropdownComponent } from './dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [ContainerModule, MatSelectModule],
  exports: [DropdownComponent],
})
export class DropdownModule {}
