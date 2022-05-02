import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DropdownComponent } from '../../../features/dropdown/dropdown.component';

import { FormField } from '../../../shared/models/form-field.model';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'ngx-form-lib',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() configList: FormField<string>[] = {} as FormField<string>[];
  @Input() form: FormGroup = {} as FormGroup;
  @ViewChild('dynamicComponent', { static: true, read: ViewContainerRef })dynamicComponent!: ViewContainerRef;

  constructor(private formService: FormsService) {}

  ngOnInit(): void {
    this.configList = this.formService.getFormFields();
    this.form = this.formService.initForm(this.configList);
    this.form.valueChanges.subscribe(() => console.log(this.form));
    this.loadDynamicFields();
  }

  private loadDynamicFields(): void {
    const instance = this.dynamicComponent.createComponent(DropdownComponent).instance;
    instance.config = this.configList[5]
    instance.form = this.form;
  }
}
