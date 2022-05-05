import { Button } from "../../features/button/button.model";
import { Checkbox } from "../../features/checkbox/checkbox.model";
import { Input } from "../../features/input/input.model";
import { Radio } from "../../features/radio/radio.model";
import { Textarea } from "../../features/textarea/textarea.model";
import { FormField } from "../../shared/models/form-field.model";

export const getFields = function() {
  const config: FormField<any>[] = [
    new Input({
      suffix: {
        type: 'icon',
        value: 'edit',
      },
      prefix: {
        type: 'string',
        value: '$',
      },
      field: new FormField({
        appearance: 'standard',
        color: 'accent',
        name: 'name',
        label: 'Name',
        order: 1,
        placeholder: 'Enter name',
        value: '',
        classes: ['ngf-col-4'],
        hint: 'Enter your name here',
      }),
    }),
    new Input({
      suffix: {
        type: 'string',
        value: 'EUR',
      },
      subType: 'number',
      field: new FormField({
        appearance: 'standard',
        label: 'Age',
        color: 'primary',
        type: 'input',
        name: 'age',
        order: 2,
        hint: 'Enter your age here',
        placeholder: 'Enter name',

        value: '26',
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
    }),
    new Textarea({
      prefix: {
        type: 'icon',
        value: 'search',
      },
      suffix: {
        type: 'icon',
        value: 'search',
      },
      field: new FormField({
        appearance: 'standard',
        color: 'accent',
        type: 'textarea',
        name: 'comment',
        label: 'Comment',
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
    }),

    new Input({
      subType: 'email',
      field: new FormField({
        appearance: 'standard',
        type: 'input',
        name: 'email',
        label: 'Email',
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
    }),

    // new FormField<string>({
    //   appearance: 'standard',
    //   type: 'dropdown',
    //   name: 'country',
    //   label: 'Country',
    //   prefix: {
    //     type: 'icon',
    //     value: 'info',
    //   },
    //   suffix: {
    //     type: 'string',
    //     value: 'USD',
    //   },
    //   classes: ['ngf-col-6'],
    //   options: [
    //     { value: 'usa', label: 'United States of America' },
    //     { value: 'br', label: 'Brazil' },
    //     { value: 'other', label: 'Other' },
    //   ],
    //   order: 5,
    //   validators: [
    //     {
    //       type: 'required',
    //       value: true,
    //       message: 'Please select any value',
    //     },
    //   ],
    // }),

    new Checkbox({
      labelPosition: 'after',
      field: new FormField({
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
    }),
    new Radio({
      showInline: false,
      options: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        { value: 'other', label: 'Other' },
      ],
      field: new FormField({
        type: 'radio',
        name: 'sex',
        label: 'Sex',
        classes: ['ngf-col-12'],
        order: 6,
        value: 'male',
      }),
    }),

    new Input({
      subType: 'email',
      field: new FormField({
        type: 'input',
        name: 'password',
        label: 'Password',
        order: 6,
        classes: ['ngf-col-12'],
      }),
    }),
    new Button({
      subType: 'button',
      field: new FormField({
        label: 'Hide Name',
        type: 'button',
        name: 'hideName',
        color: 'primary',
        order: 7,
        classes: ['ngf-col-1', 'ngf-fit-content'],
      }),
    }),
    new Button({
      subType: 'submit',
      field: new FormField({
        label: 'Submit',
        type: 'button',
        name: 'submit',
        color: 'accent',
        order: 8,
        classes: ['ngf-col-1', 'ngf-fit-content'],
        value: 'Submit this form',
      }),
    }),
  ];
  return config;
  // return config.sort((a, b) => a.order - b.order);
}