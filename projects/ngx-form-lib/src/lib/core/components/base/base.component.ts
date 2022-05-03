import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '../../../shared';

@Component({
  template: ''
})
export class BaseComponent {
  @Input() config: FormField<string> =  {} as FormField<string>;
  @Input() form: FormGroup = {} as FormGroup;
}
