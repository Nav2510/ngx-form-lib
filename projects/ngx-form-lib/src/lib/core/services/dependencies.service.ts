import { Injectable } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

import { Dependency } from '../../shared/models/dependency.model';
import { Field } from '../../shared/models/field.model';

@Injectable({
  providedIn: 'root',
})
export class DependenciesService {
  _hiddenFields: BehaviorSubject<{ [key: string]: unknown }> =
    new BehaviorSubject<{ [key: string]: unknown }>({});

  setDependenciesFields(
    group: UntypedFormGroup,
    config: Field<unknown>,
    formValue: any
  ) {
    this.setFieldPropertiesToDefault(group, config);
    config.facets.dependencies?.forEach((dependency) => {
      if (dependency.value === formValue[dependency.fieldPath]) {
        switch (dependency.type) {
          case 'value-change':
            this.setDependentValue(group, dependency, config.name);
            break;
          case 'disabled':
            this.disableDependentField(group, dependency, config.name);
            break;
          case 'hidden':
            this.hideDependentField(config.name, dependency);
        }
      }
    });
  }

  getHiddenFields(): Observable<{[key: string]: unknown}> {
    return this._hiddenFields.asObservable();
  }

  setFieldPropertiesToDefault(group: UntypedFormGroup, config: Field<unknown>) {
    if (config.facets.disabled === true) {
      group.get(config.name)?.disable({ emitEvent: false });
    } else if (config.facets.disabled === false) {
      group.get(config.name)?.enable({ emitEvent: false });
    }
    if (config.facets.hidden === true || config.facets.hidden === false) {
      this.hideDependentField(config.name, {} as Dependency, config.facets.hidden);
    }
  }

  disableDependentField(
    group: UntypedFormGroup,
    dependency: Dependency,
    controlName: string
  ): void {
    if (
      dependency.setDependentValueTo === true ||
      dependency.setDependentValueTo === 'true'
    ) {
      group.get(controlName)?.disable({ emitEvent: false });
    } else if (
      dependency.setDependentValueTo === false ||
      dependency.setDependentValueTo === 'false'
    ) {
      group.get(controlName)?.enable({ emitEvent: false });
    }
  }

  setDependentValue(
    group: UntypedFormGroup,
    dependency: Dependency,
    controlName: string
  ): void {
    group
      .get(controlName)
      ?.setValue(dependency.setDependentValueTo, { emitEvent: false });
  }

  hideDependentField(
    controlName: string,
    dependency: Dependency,
    hiddenProperty: boolean = false
  ): void {
    const hiddenFields = this._hiddenFields.getValue();
    hiddenFields[controlName] = dependency.setDependentValueTo || hiddenProperty;
    this._hiddenFields.next(hiddenFields);
  }
}
