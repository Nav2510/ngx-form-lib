import { Component } from '@angular/core';

import { ContainerComponent } from '../../core/components/container/container.component';

@Component({
  selector: 'lib-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends ContainerComponent {}
