import { Pipe, PipeTransform } from '@angular/core';

import { FormField } from '../../models/form-field.model';

@Pipe({
  name: 'sortByOrder',
})
export class SortByOrderPipe implements PipeTransform {
  transform(fields: FormField<any>[], ...args: unknown[]): FormField<any>[] {
    return fields.sort((a, b) => a.order - b.order);
  }
}
