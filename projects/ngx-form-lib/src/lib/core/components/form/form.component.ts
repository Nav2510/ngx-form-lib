import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';


import { FormConfig } from '../../../shared/models/form-config.model';
import { FormsService } from '../../services/forms.service';

@Component({
  selector: 'ngx-form-lib',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FormComponent implements OnInit, OnDestroy {
  @Input() config: FormConfig = {} as FormConfig;
  @Output() valueChanges = new EventEmitter<any>();
  @Output() formSubmit = new EventEmitter<void>();

  form: FormGroup = {} as FormGroup;
  private readonly destroy$ = new Subject<void>();

  constructor(private formService: FormsService) {}

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.valueChanges.emit(this.form.value);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config'].currentValue) {
      this.form = this.formService.initForm(
        changes['config'].currentValue.sections
      );
    }
  }

  getFormControl(formGroupName: string, index: number): FormGroup {
    // TODO: Check if it can be optimized or not
    return this.form.get(`${formGroupName}.${index}`) as FormGroup;
  }

  onSubmit(): void {
    this.formSubmit.emit();
  }

  ngOnDestroy(): void {
    this.destroy$.next(undefined);
    this.destroy$.complete();
  }
}
