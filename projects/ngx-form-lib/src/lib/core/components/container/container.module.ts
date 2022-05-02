import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';

import { ContainerComponent } from './container.component';
import { PrefixSuffixModule } from '../../../shared/components/prefix-suffix/prefix-suffix.module';


const MODULES = [
  CommonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  PrefixSuffixModule,
];

@NgModule({
  declarations: [ContainerComponent],
  imports: MODULES,
  exports: [ContainerComponent, MODULES],
})
export class ContainerModule {}
