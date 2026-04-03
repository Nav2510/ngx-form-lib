import {
  Component,
  DestroyRef,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

import { Config } from '../../../shared/models/config.model';
import { FormsService } from '../../services/forms.service';
import { DependenciesService } from '../../../core/services/dependencies.service';
import { AutoUnsubscribe } from '../../../shared/decorators/auto-unsubscribe.decorator';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'ngx-form-lib',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [DependenciesService],
})
@AutoUnsubscribe()
export class FormComponent implements OnInit {
  private _config: Config = {} as Config;
  private readonly destroyRef = inject(DestroyRef);

  @Input() set config(configObj: Config | object) {
    this._config = configObj as Config;
  }

  get config(): Config {
    return this._config;
  }

  @Output() valueChanges = new EventEmitter<any>();
  @Output() formSubmit = new EventEmitter<void>();

  form: UntypedFormGroup = {} as UntypedFormGroup;
  hiddenFields$: Observable<Record<string, unknown>> =
    this.dependenciesService.hiddenFields$;

  constructor(
    private readonly formService: FormsService,
    private readonly dependenciesService: DependenciesService,
  ) {}

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.valueChanges.emit(this.form.value);
      });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['config'].currentValue) {
      const cfg = changes['config'].currentValue as Config;
      this.form = this.formService.initForm(cfg.sections);
      this.dependenciesService.applyInitialDependencyState(cfg.sections, this.form);
    }
  }

  getFormControl(formGroupName: string, index: number): UntypedFormGroup {
    return this.form.get(`${formGroupName}.${index}`) as UntypedFormGroup;
  }

  onSubmit(): void {
    this.formSubmit.emit();
  }
}
