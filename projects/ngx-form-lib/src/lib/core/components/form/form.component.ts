import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '../../../shared/models/form-field.model';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'ngx-form-lib',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit {
  @Input() configList: FormField<string>[] = {} as FormField<string>[];
  @Input() form: FormGroup = {} as FormGroup;

  constructor(private formService: FormsService) {}

  ngOnInit(): void {
    this.configList = this.formService.getFormFields();
    this.form = this.formService.initForm(this.configList);
    this.form.valueChanges.subscribe(() => console.log(this.form));
  }
}
