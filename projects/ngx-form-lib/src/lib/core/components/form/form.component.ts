import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { FormConfig } from '../../../shared/models/form-config.model';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'ngx-form-lib',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  @Input() config: FormConfig;
  @Input() form: FormGroup = {} as FormGroup;

  constructor(private formService: FormsService) {
    this.config = this.formService.getFormConfig();
  }

  ngOnInit(): void {
    this.form = this.formService.initForm(this.config.sections);
    this.form.valueChanges.subscribe(() => console.log(this.form));
  }

  getFormControl(formGroupName: string, index: number): FormGroup {
    // TODO: Check if it can be optimized or not
    return (this.form.get(`${formGroupName}.${index}`) as FormGroup);
  }
}
