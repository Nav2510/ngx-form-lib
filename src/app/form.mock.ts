import { Dropdown, Button, Input } from "ngx-form-lib";

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
        new Dropdown({
          field: new Field({
            name: 'country',
            classes: ['ngf-col-12'],
            hint: '',
            label: 'Select country',
            order: 1,
            placeholder: 'Select country',
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
              label: 'India',
              value: 'india',
            },
            {
              label: 'Japan',
              value: 'japan',
            },
            {
              label: 'US',
              value: 'us'
            }
          ],
        }),
        new Dropdown({
          field: new Field({
            name: 'state',
            classes: ['ngf-col-12'],
            hint: '',
            label: 'Select state',
            order: 1,
            placeholder: 'Select state',
            value: 'tokyo',
            validators: [
              {
                type: 'required',
                value: true,
                message: 'Select at least one value',
              },
            ],
            facets: {
              disabled: true,
              dependencies: [
                {
                  fieldPath: 'country',
                  type: 'disabled',
                  value: 'india',
                  setDependentValueTo: false,
                }
              ]
            },
          }),
          options: [
            {
              label: 'Rajasthan',
              value: 'rajasthan',
            },
            {
              label: 'Haryana',
              value: 'haryana',
            },
            {
              label: 'Punjab',
              value: 'punjab'
            },
          ],
        }),
        new Input({
          subType: 'text',
          field: new Field({
            name: 'city',
            label: "Enter city",
            order: 35,
            value: 'Mumbai',
            color: 'primary',
            classes: ['ngf-col-12'],
            facets: {
              disabled: false,
              dependencies: [
                {
                  fieldPath: 'state',
                  type: 'value-change',
                  value: 'rajasthan',
                  setDependentValueTo: 'Jaipur',
                },
              ]
            },
          }),
        }),
        new Input({
          subType: 'text',
          field: new Field({
            name: 'pincode',
            label: "Enter pincode",
            order: 35,
            value: '',
            color: 'primary',
            classes: ['ngf-col-12'],
            facets: {
              disabled: false,
              dependencies: [{
                fieldPath: 'state',
                type: 'value-change',
                value: 'punjab',
                setDependentValueTo: '335001'
              }]
            },
          }),
        }),
        new Button({
          attribute: 'mat-flat-button',
          subType: 'submit',
          field: new Field({
            name: 'button',
            label: 'View in console',
            order: 40,
            color: 'primary',
            classes: ['ngf-col-6'],
            facets: {
              hidden: false,
            }
          }),
        }),
      ],
    },
  ],
};
  