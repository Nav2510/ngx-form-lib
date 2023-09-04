import { Component, OnInit, SimpleChanges } from '@angular/core';

import { BaseComponent } from '../../core/components/base/base.component';
import { Dropdown } from './dropdown.model';

@Component({
  selector: 'lib-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent extends BaseComponent implements OnInit {
  override config: Dropdown | null = null;


  /** Splitting ',' separated value to an array of values and setting to multiple control
   *  */
  override ngOnInit(): void {
    super.ngOnInit();
    if (this.config?.multiple) {
      this.group?.get(this.config.name)?.setValue(this.config.value?.split(','));
    }
  }
}
