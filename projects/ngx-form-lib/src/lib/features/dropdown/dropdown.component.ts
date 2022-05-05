import { Component } from '@angular/core';

import { BaseComponent } from '../../core/components/base/base.component';
import { Dropdown } from './dropdown.model';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent extends BaseComponent{
  override config: Dropdown | null = null;
}
