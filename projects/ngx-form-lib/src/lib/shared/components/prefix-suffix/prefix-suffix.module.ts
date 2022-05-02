import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';

import { PrefixSuffixComponent } from './prefix-suffix.component';

@NgModule({
  declarations: [PrefixSuffixComponent],
  imports: [CommonModule, MatIconModule],
  exports: [PrefixSuffixComponent],
})
export class PrefixSuffixModule {}
