import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SortByOrderPipe } from './sort-by-order.pipe';

@NgModule({
  declarations: [SortByOrderPipe],
  imports: [CommonModule],
  exports: [SortByOrderPipe],
})
export class SortByOrderModule {}
