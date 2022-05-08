import { Injectable } from '@angular/core';
import { FormArray, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { Validation } from '../../shared/models/validation.model';
import { ValidationTypeEnum } from '../../shared/models/validation-type.model';
import { FormSection } from '../../shared/models/form-section.model';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  initForm(sections: FormSection[]): FormGroup {
    const list: FormGroup[] = [];
    sections.forEach((sectionItem) => {
      const group: { [key: string]: FormControl } = {};
      sectionItem.fields.forEach((config) => {
        group[config.name] = new FormControl(
          config.value,
          config.validators ? this.createValidations(config.validators) : null
        );
      });
      list.push(new FormGroup(group))
    })

    return new FormGroup({sections: new FormArray(list)});
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