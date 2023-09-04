import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Field } from '../../../shared/models/field.model';
import { ParentConfig } from '../../../shared/models/parent-config.model';
import { DependenciesService } from '../../services/dependencies.service';
import { AutoUnsubscribe } from '../../../shared/decorators/auto-unsubscribe.decorator';
import { Dependency } from 'ngx-form-lib/shared';

@Component({
  template: '',
})
@AutoUnsubscribe()
export class BaseComponent implements OnInit {
  @Input() config: Field<string> | null = null;
  @Input() group: FormGroup | null = null;
  @Input() parentConfig: ParentConfig | null = null;

  subscription: Subscription = new Subscription();

  constructor(private readonly dependenciesService: DependenciesService) {}

  ngOnInit(): void {
    this.setupDependenciesControls();
  }

  setupDependenciesControls(): void {
    if (this.config?.facets.hidden) {
      this.dependenciesService.hideDependentField(this.config.name, {} as Dependency, this.config.facets.hidden)
    }
    if (this.config?.facets.dependencies) {
      this.group?.valueChanges.subscribe((formValue) => {
        this.config && this.group &&
          this.dependenciesService.setDependenciesFields(
            this.group,
            this.config,
            formValue
          );
      });
    }
  }
}
