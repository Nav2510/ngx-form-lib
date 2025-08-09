import { Injectable } from '@angular/core';
import { UntypedFormArray, UntypedFormControl, UntypedFormGroup, ValidatorFn, Validators } from '@angular/forms';

import { Validation } from '../../shared/models/validation.model';
import { ValidationTypeEnum } from '../../shared/models/validation-type.model';
import { Section } from '../../shared/models/section.model';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  initForm(sections: Section[]): UntypedFormGroup {
    const list: UntypedFormGroup[] = [];
    sections.forEach((sectionItem) => {
      const group: { [key: string]: UntypedFormControl } = {};
      sectionItem.fields.forEach((config) => {
        group[config.name] = new UntypedFormControl(
          { value: config.value, disabled: config.facets?.disabled },
          config.validators ? this.createValidations(config.validators) : null
        );
      });
      list.push(new UntypedFormGroup(group))
    })

    return new UntypedFormGroup({sections: new UntypedFormArray(list)});
  }

  createValidations(validators: Validation[]): ValidatorFn[] | null {
    if (!validators) {
      return null;
    }
    const validatorsList: ValidatorFn[] = [];

    for (const validationItem of validators) {
      switch (validationItem.type) {
        case ValidationTypeEnum.Min: {
          validatorsList.push(Validators.min(validationItem.value));
          break;
        }
        case ValidationTypeEnum.Max: {
          validatorsList.push(Validators.max(validationItem.value));
          break;
        }
        case ValidationTypeEnum.MinLength: {
          validatorsList.push(Validators.minLength(validationItem.value));
          break;
        }
        case ValidationTypeEnum.MaxLength: {
          validatorsList.push(Validators.maxLength(validationItem.value));
          break;
        }
        case ValidationTypeEnum.Required: {
          validatorsList.push(Validators.required);
          break;
        }
        case ValidationTypeEnum.Email: {
          validatorsList.push(Validators.email);
          break;
        }
        default: {
          return null;
        }
      }
    }
    return validatorsList;
  }
}