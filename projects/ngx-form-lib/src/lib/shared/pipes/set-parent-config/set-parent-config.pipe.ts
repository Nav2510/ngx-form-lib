import { Pipe, PipeTransform } from '@angular/core';

import {Field } from '../../models/field.model';
import { ParentConfig } from '../../models/parent-config.model';

@Pipe({
  name: 'setParentConfig'
})
export class SetParentConfigPipe implements PipeTransform {

  transform(parent: ParentConfig | null, child:Field<string>, field: keyof ParentConfig): any {
    if (!parent) {
      return '';
    }
      return child[field as keyof ParentConfig]
        ? child[field as keyof ParentConfig]
        : parent[field as keyof ParentConfig];   
  }

}
