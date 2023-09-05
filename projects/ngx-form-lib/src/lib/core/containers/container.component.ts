import { Component, Input, OnInit, Type, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ButtonComponent } from '../../features/button/button.component';
import { CheckboxComponent } from '../../features/checkbox/checkbox.component';
import { DropdownComponent } from '../../features/dropdown/dropdown.component';
import { InputComponent } from '../../features/input/input.component';
import { RadioComponent } from '../../features/radio/radio.component';
import { TextareaComponent } from '../../features/textarea/textarea.component';
import { FieldTypeEnum } from '../../shared/enums/field-type.enum';
import { ParentConfig } from '../../shared/models/parent-config.model';
import { BaseComponent } from '../components/base/base.component';
import { Field } from '../../shared/models/field.model';

const componentMapping: {[key in FieldTypeEnum]: Type<BaseComponent>} = {
  button: ButtonComponent,
  checkbox: CheckboxComponent,
  dropdown: DropdownComponent,
  input: InputComponent,
  radio: RadioComponent,
  textarea: TextareaComponent,
};

@Component({
  selector: 'ngf-container',
  template: `<ng-template #dynamicComponent></ng-template>`,
})
export class ContainerComponent implements OnInit {
  @Input() config: Field<any> = {} as Field<any>;
  @Input() group: FormGroup | null = null;
  @Input() parentConfig: ParentConfig | null = null;
  @ViewChild('dynamicComponent', { static: true, read: ViewContainerRef }) dynamicComponent!: ViewContainerRef;

  ngOnInit(): void {
    this.loadDynamicFields();
  }

  private loadDynamicFields(): void {
    if (this.dynamicComponent && this.config?.type) {
      const componentRef = this.dynamicComponent.createComponent(componentMapping[this.config.type]);

      componentRef.instance.config = this.config;
      componentRef.instance.group = this.group;
      componentRef.instance.parentConfig = this.parentConfig;
    }
  }
}
