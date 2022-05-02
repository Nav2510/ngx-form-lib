import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormField } from '../../../shared/models/form-field.model';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'ngx-form-lib',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit{
  @Input() configList: FormField<string>[] = {} as FormField<string>[];
  @Input() form: FormGroup | undefined;

  constructor(private formService: FormsService) {}

  ngOnInit(): void {
    this.configList = this.formService.getFormFields();
    this.form = this.formService.initForm(this.configList);
    this.form.valueChanges.subscribe(()=> console.log(this.form));
  }
}
