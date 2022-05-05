import { Component } from '@angular/core';

import { BaseComponent } from '../../core/components/base/base.component';
import { Textarea } from './textarea.model';

@Component({
  selector: 'ngf-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent extends BaseComponent{
  override config: Textarea | null = null;
}
