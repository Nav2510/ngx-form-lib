import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';

import { BaseComponent } from './base.component';
import { PrefixSuffixModule } from '../../../shared/components/prefix-suffix/prefix-suffix.module';
import { SetParentConfigModule } from '../../../shared/pipes/set-parent-config/set-parent-config.module';

const MODULES = [MatFormFieldModule, PrefixSuffixModule, ReactiveFormsModule, SetParentConfigModule];

@NgModule({
  declarations: [BaseComponent],
  imports: [CommonModule, ...MODULES],
  exports: [BaseComponent, ...MODULES],
})
export class BaseModule {}
