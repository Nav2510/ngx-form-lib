import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

import { Dependency } from '../../shared/models/dependency.model';
import { Field } from '../../shared/models/field.model';
import { Section } from '../../shared/models/section.model';

@Injectable()
export class DependenciesService {
  private readonly hiddenFields = new BehaviorSubject<Record<string, boolean>>(
    {},
  );

  setDependenciesFields(
    group: UntypedFormGroup,
    config: Field<unknown>,
    formValue: any,
  ) {
    this.setFieldPropertiesToDefault(group, config);
    config.facets.dependencies?.forEach((dependency) => {
      if (dependency.value === formValue[dependency.fieldPath]) {
        switch (dependency.type) {
          case 'value-change':
            this.setDependentValue(group, dependency, config.name);
            break;
          case 'disabled':
            this.disableDependentField(
              group,
              dependency as Dependency<boolean>,
              config.name,
            );
            break;
          case 'hidden':
            this.hideDependentField(
              config.name,
              dependency as Dependency<boolean>,
            );
        }
      }
    });
  }

  get hiddenFields$(): Observable<Record<string, boolean>> {
    return this.hiddenFields.asObservable();
  }

  /**
   * Applies dependency rules (hidden, disabled, value-change) for every field using the
   * current section values. Call once when the form is built (e.g. from FormComponent
   * ngOnChanges) so state is correct before child field views run — avoids updating
   * parent bindings during change detection.
   */
  applyInitialDependencyState(
    sections: Section[],
    form: UntypedFormGroup,
  ): void {
    this.hiddenFields.next({});
    const sectionsArray = form.get('sections') as UntypedFormArray | null;
    if (!sectionsArray) {
      return;
    }
    sections.forEach((section, i) => {
      const group = sectionsArray.at(i) as UntypedFormGroup;
      const formValue = group.getRawValue();
      for (const field of section.fields) {
        this.setDependenciesFields(group, field, formValue);
      }
    });
  }

  setFieldPropertiesToDefault(group: UntypedFormGroup, config: Field<unknown>) {
    if (config.facets.disabled === true) {
      group.get(config.name)?.disable({ emitEvent: false });
    } else if (config.facets.disabled === false) {
      group.get(config.name)?.enable({ emitEvent: false });
    }
    if (config.facets.hidden === true || config.facets.hidden === false) {
      this.hideDependentField(
        config.name,
        {} as Dependency<boolean>,
        config.facets.hidden,
      );
    }
  }

  disableDependentField(
    group: UntypedFormGroup,
    dependency: Dependency<boolean>,
    controlName: string,
  ): void {
    if (dependency.setDependentValueTo) {
      group.get(controlName)?.disable({ emitEvent: false });
    } else {
      group.get(controlName)?.enable({ emitEvent: false });
    }
  }

  setDependentValue(
    group: UntypedFormGroup,
    dependency: Dependency<unknown>,
    controlName: string,
  ): void {
    group
      .get(controlName)
      ?.setValue(dependency.setDependentValueTo, { emitEvent: false });
  }

  hideDependentField(
    controlName: string,
    dependency: Dependency<boolean>,
    hiddenProperty: boolean = false,
  ): void {
    const hiddenValue: boolean =
      dependency.setDependentValueTo || hiddenProperty;
    this.hiddenFields.next({
      ...this.hiddenFields.getValue(),
      [controlName]: hiddenValue,
    });
  }
}
