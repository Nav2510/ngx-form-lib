import { Component } from '@angular/core';

import { BaseComponent } from '../../core/components/base/base.component';
import { Input } from './input.model';

@Component({
  selector: 'ngf-input',
  templateUrl: './input.component.html',
})
export class InputComponent extends BaseComponent<string> {
  override config: Input | null = null;
}
