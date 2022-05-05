import { Component } from '@angular/core';

import { BaseComponent } from '../../core/components/base/base.component';
import { Input } from './input.model';

@Component({
  selector: 'ngf-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent extends BaseComponent{
  override config: Input | null = null;
}
