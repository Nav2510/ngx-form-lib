import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

import { Validation } from '../../shared/models/validation.model';
import { FormField } from '../../shared/models/form-field.model';
import { ValidationTypeEnum } from '../../shared/models/validation-type.model';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  initForm(config: FormField<string>[]): FormGroup {
    const group: { [key: string]: FormControl } = {};
    config.forEach((config) => {
      group[config.name] = new FormControl(
        config.value,
        config.validators ? this.createValidations(config.validators) : null
      );
    });
    return new FormGroup(group);
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

  getFormFields(): FormField<string>[] {
    const config: FormField<any>[] = [
      new FormField({
        appearance: 'standard',
        type: 'input',
        color: 'accent',
        name: 'name',
        subType: 'text',
        label: 'Name',
        order: 1,
        placeholder: 'Enter name',
        suffix: {
          type: 'icon',
          value: 'edit',
        },
        prefix: {
          type: 'string',
          value: '$',
        },
        value: '',
        classes: ['ngf-col-4'],
        hint: 'Enter your name here',
      }),
      new FormField({
        appearance: 'standard',
        label: 'Age',
        color: 'primary',
        type: 'input',
        name: 'age',
        subType: 'number',
        order: 2,
        hint: 'Enter your age here',
        placeholder: 'Enter name',
        suffix: {
          type: 'string',
          value: 'EUR',
        },
        value: 26,
        classes: ['ngf-col-8'],
        validators: [
          {
            type: 'min',
            message: 'Value cannot be negative',
            value: 0,
          },
          {
            type: 'max',
            message: 'Value cannot be more than 100',
            value: 100,
          },
          {
            type: 'minlength',
            value: 10,
            showDynamicError: true,
            message: 'Minimum 10 character length required.',
          },
          {
            type: 'required',
            message: 'This field is mandatory',
            value: true,
          },
        ],
      }),
      new FormField<string>({
        appearance: 'standard',
        color: 'accent',
        type: 'textarea',
        name: 'comment',
        label: 'Comment',
        prefix: {
          type: 'icon',
          value: 'search',
        },
        suffix: {
          type: 'icon',
          value: 'search',
        },
        order: 3,
        hint: 'Max length of comment should be 100',
        classes: ['ngf-col-12'],
        validators: [
          {
            type: 'required',
            value: true,
            message: 'This is required field edited.',
          },
          {
            type: 'minlength',
            value: 10,
            showDynamicError: true,
            message: 'Minimum 10 character length required.',
          },
          {
            type: 'maxlength',
            value: 100,
            message: 'Maximum 100 character length required.',
          },
        ],
      }),

      new FormField<string>({
        appearance: 'standard',
        type: 'input',
        name: 'email',
        label: 'Email',
        subType: 'email',
        classes: ['ngf-col-12'],
        validators: [
          {
            type: 'required',
            value: true,
            message: 'This is required field.',
          },
          {
            type: 'email',
            value: true,
            message: 'Incorrect email format',
          },
        ],
        order: 4,
      }),

      new FormField<string>({
        appearance: 'standard',
        type: 'dropdown',
        name: 'country',
        label: 'Country',
        prefix: {
          type: 'icon',
          value: 'info',
        },
        suffix: {
          type: 'string',
          value: 'USD',
        },
        classes: ['ngf-col-6'],
        options: [
          { value: 'usa', label: 'United States of America' },
          { value: 'br', label: 'Brazil' },
          { value: 'other', label: 'Other' },
        ],
        order: 5,
        validators: [
          {
            type: 'required',
            value: true,
            message: 'Please select any value',
          },
        ],
      }),

      new FormField<string>({
        type: 'checkbox',
        name: 'agree',
        label: 'I accept terms and services',
        order: 4,
        classes: ['ngf-col-6'],
        color: 'primary',
        validators: [
          {
            type: 'required',
            value: true,
            message: 'This is required field.',
          },
        ],
      }),
      new FormField<string>({
        type: 'radio',
        name: 'sex',
        label: 'Sex',
        classes: ['ngf-col-12'],
        showInline: false,
        options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'other', label: 'Other' },
        ],
        order: 6,
      }),

      new FormField<string>({
        type: 'input',
        name: 'password',
        label: 'Password',
        subType: 'password',
        order: 6,
        classes: ['ngf-col-12'],
      }),
      new FormField({
        label: 'Hide Name',
        type: 'button',
        name: 'hideName',
        subType: 'button',
        order: 7,
        classes: ['ngf-col-1'],
      }),
      new FormField({
        label: 'Submit',
        type: 'button',
        name: 'submit',
        subType: 'submit',
        order: 8,
        classes: ['ngf-col-1'],
        value: 'Submit this form',
      }),
    ];
    return config.sort((a, b) => a.order - b.order);
  }
}