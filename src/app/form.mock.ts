import { Input } from "@angular/core";

import { Textarea, Dropdown, Button } from "ngx-form-lib";

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
              name: 'texarea',
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
                label: 'Dynamic',
                value: 'dynamic',
              },
              {
                label: 'Reactive',
                value: 'reactive',
              },
            ],
            multiple: true,
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
  