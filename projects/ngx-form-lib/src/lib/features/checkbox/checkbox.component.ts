import { Component } from '@angular/core';

import { BaseComponent } from '../../core/components/base/base.component';
import { Checkbox } from './checkbox.model';

@Component({
  selector: 'ngf-checkbox',
  templateUrl: './checkbox.component.html',
})
export class CheckboxComponent extends BaseComponent{
  override config: Checkbox | null = null;
}
