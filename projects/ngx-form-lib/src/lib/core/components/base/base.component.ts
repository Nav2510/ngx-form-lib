import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { AutoUnsubscribe } from '../../../shared/decorators/auto-unsubscribe.decorator';
import { Field } from '../../../shared/models/field.model';
import { ParentConfig } from '../../../shared/models/parent-config.model';
import { DependenciesService } from '../../services/dependencies.service';

@Component({
  template: '',
})
@AutoUnsubscribe()
export class BaseComponent<T = unknown> implements OnInit {
  @Input() config: Field<T> | null = null;
  @Input() group: UntypedFormGroup | null = null;
  @Input() parentConfig: ParentConfig | null = null;

  private readonly destroyRef = inject(DestroyRef);

  constructor(private readonly dependenciesService: DependenciesService) {}

  ngOnInit(): void {
    this.setupDependenciesControls();
  }

  setupDependenciesControls(): void {
    if (this.config?.facets.dependencies) {
      this.group?.valueChanges
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((formValue) => {
          this.config &&
            this.group &&
            this.dependenciesService.setDependenciesFields(
              this.group,
              this.config,
              formValue,
            );
        });
    }
  }
}
