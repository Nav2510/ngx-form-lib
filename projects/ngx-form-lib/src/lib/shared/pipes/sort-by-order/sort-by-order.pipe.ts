import { Pipe, PipeTransform } from '@angular/core';

import { Field } from '../../models/field.model';

@Pipe({
  name: 'sortByOrder',
})
export class SortByOrderPipe implements PipeTransform {
  transform(fields: Field<unknown>[], ...args: unknown[]): Field<unknown>[] {
    return fields.sort((a, b) => a.order - b.order);
  }
}
