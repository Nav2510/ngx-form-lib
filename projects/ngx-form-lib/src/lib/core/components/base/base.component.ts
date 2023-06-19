import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Field } from '../../../shared/models/field.model';
import { ParentConfig } from '../../../shared/models/parent-config.model';
import { DependentService } from '../../../core/services/dependent.service';
import { AutoUnsubscribe } from '../../../shared/decorators/auto-unsubscribe.decorator';

@Component({
  template: '',
})
@AutoUnsubscribe()
export class BaseComponent implements OnInit {
  @Input() config: Field<string> | null = null;
  @Input() group: FormGroup | null = null;
  @Input() parentConfig: ParentConfig | null = null;

  subscription: Subscription = new Subscription();

  constructor(private readonly dependentService: DependentService) {}

  ngOnInit(): void {
    this.setupDependentControls();
  }

  setupDependentControls(): void {
    this.group?.get(this.config?.name || '')?.valueChanges.subscribe(controlValue => {
      if (this.config?.facet.dependents && this.group) {
        this.dependentService.setDependentFields(
          this.group,
          this.config.facet.dependents,
          controlValue
        );
      }
    });
  }
}
