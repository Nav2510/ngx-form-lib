import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '../../../shared/models/form-field.model';

@Component({
  selector: 'lib-base',
  template: '',
})
export class ContainerComponent {
  @Input() config: FormField<string> | null = null;
  @Input() form: FormGroup | null = null;
}
