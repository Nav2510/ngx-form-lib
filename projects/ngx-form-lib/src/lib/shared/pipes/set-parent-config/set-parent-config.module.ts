import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SetParentConfigPipe } from './set-parent-config.pipe';

@NgModule({
  declarations: [SetParentConfigPipe],
  imports: [CommonModule],
  exports: [SetParentConfigPipe]
})
export class SetParentConfigModule {}
