import { Component } from '@angular/core';

import { BaseComponent } from '../../core/components/base/base.component';
import { Button } from './button.model';

@Component({
  selector: 'ngf-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends BaseComponent{
  override config: Button | null = null;
}
