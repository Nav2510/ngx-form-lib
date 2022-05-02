import { Component } from '@angular/core';

import { ContainerComponent } from '../../core/components/container/container.component';

@Component({
  selector: 'lib-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent extends ContainerComponent {}
