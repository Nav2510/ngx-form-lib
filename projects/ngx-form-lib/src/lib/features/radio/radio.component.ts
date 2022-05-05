import { Component } from '@angular/core';

import { BaseComponent } from '../../core/components/base/base.component';
import { Radio } from './radio.model';

@Component({
  selector: 'ngf-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss']
})
export class RadioComponent extends BaseComponent{
  override config: Radio | null = null;
}
