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


  ngOnInit(): void {
    if (this.config?.multiple) {
      this.form?.get(this.config.name)?.setValue(this.config.value?.split(','))
    }
  }
}
