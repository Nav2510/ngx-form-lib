import { Textarea, Dropdown, Button, Input } from "ngx-form-lib";

import { Config, Field, ParentConfig } from "ngx-form-lib/shared/models";

export const MASTER_CONFIG: Config = {
  header: 'Demo Awesome Form',
  parentConfig: new ParentConfig({
    appearance: 'outline',
    color: 'primary',
  }),
  sections: [
    {
      sectionHeader: 'Section Header',
      fields: [
        new Textarea({
          rows: 8,
          field: new Field({
            name: 'textarea',
            label: 'Label for the textarea',
            value: 'Textarea value',
            order: 1,
            classes: ['ngf-col-12'],
          }),
        }),
        new Dropdown({
          field: new Field({
            classes: ['ngf-col-12'],
            hint: '',
            label: 'Select below form type to check field dependency',
            name: 'form',
            facet: {
              dependents: [
                {
                  fieldPath: 'awesomeLibrary',
                  type: 'disabled',
                  value: 'enable',
                  setDependentValueTo: false,
                },
                {
                  fieldPath: 'awesomeLibrary',
                  type: 'value-change',
                  value: 'valueChange',
                  setDependentValueTo: 'Ngx-form-lib is awesome!!',
                },
                {
                  fieldPath: 'textarea',
                  type: 'disabled',
                  value: 'disableTextarea',
                  setDependentValueTo: true,
                }
              ],
            },
            order: 1,
            placeholder: 'Select form',
            value: '',
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Select at least one value',
              },
            ],
          }),
          options: [
            {
              label: 'Enable Field',
              value: 'enable',
            },
            {
              label: 'Change value',
              value: 'valueChange',
            },
            {
              label: 'Disable Textarea',
              value: 'disableTextarea'
            }
          ],
        }),
        new Input({
          subType: 'text',
          field: new Field({
            label: "Select dropdown field to alter it's property",
            order: 35,
            value: '',
            color: 'primary',
            name: 'awesomeLibrary',
            classes: ['ngf-col-12'],
            facet: {
              disabled: true,
            },
          }),
        }),
        new Button({
          attribute: 'mat-flat-button',
          subType: 'submit',
          field: new Field({
            label: 'View in console',
            order: 40,
            color: 'primary',
            name: 'submit',
            classes: ['ngf-col-6'],
          }),
        }),
      ],
    },
  ],
};
  