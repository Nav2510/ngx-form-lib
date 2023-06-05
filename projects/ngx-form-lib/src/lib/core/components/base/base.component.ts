import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Field } from '../../../shared/models/field.model';
import { ParentConfig } from '../../../shared/models/parent-config.model';

@Component({
  template: ''
})
export class BaseComponent {
  @Input() config: Field<string> | null =  null;
  @Input() group: FormGroup | null = null;
  @Input() parentConfig: ParentConfig | null = null;
}
