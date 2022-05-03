import { Component, ComponentRef, Input, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ButtonComponent } from '../../../features/button/button.component';
import { CheckboxComponent } from '../../../features/checkbox/checkbox.component';

import { DropdownComponent } from '../../../features/dropdown/dropdown.component';
import { InputComponent } from '../../../features/input/input.component';
import { RadioComponent } from '../../../features/radio/radio.component';
import { TextareaComponent } from '../../../features/textarea/textarea.component';
import { FieldTypeEnum } from '../../../shared/models/field-type.model';
import { FormField } from '../../../shared/models/form-field.model';
import { FormsService } from '../../services/forms.service';
import { ContainerComponent } from '../container/container.component';

// TODO: update to { [key in FieldTypeEnum]: any }
const componentMapping: { [key: string]: any } = {
  'button': ButtonComponent,
  'checkbox': CheckboxComponent,
  'dropdown': DropdownComponent,
  'input': InputComponent,
  'radio': RadioComponent,
  'textarea': TextareaComponent
};

@Component({
  selector: 'ngx-form-lib',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() configList: FormField<string>[] = {} as FormField<string>[];
  @Input() form: FormGroup = {} as FormGroup;
  @ViewChild('dynamicComponent', { static: true, read: ViewContainerRef })dynamicComponent!: ViewContainerRef;

  constructor(private formService: FormsService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.configList = this.formService.getFormFields();
    this.form = this.formService.initForm(this.configList);
    this.form.valueChanges.subscribe(() => console.log(this.form));
    this.loadDynamicFields();
  }

  private loadDynamicFields(): void {
    this.configList.forEach((configItem) => {
      const componentRef = this.dynamicComponent.createComponent(componentMapping[configItem.type]) as ComponentRef<any>;
      // const classes = configItem.classes ? configItem.classes?.join(','): '';

      // this.renderer.addClass(componentRef.location.nativeElement, classes);

      componentRef.instance.config = configItem;
      componentRef.instance.form = this.form;

    })
  }
}
