# FormLibWorkspace

This project let you create different angular forms with all the features of angular reactive by providing basic class configuration. It user angular materials under the hook taking advantage of angualar themes.


## Installation

1. In you angular project run command `npm install --save ngx-form-lib` and install the package.
2. This library use [Angular material](https://material.angular.io/) for themes. So, if you have already setup `Angular material` skip step 3
3. You also need to install `peer dependencies`. [Installing npm peer dependencies](https://www.npmjs.com/package/npm-install-peers)
4. Setup angular material in your project. [Getting started guide](https://material.angular.io/guide/getting-started)
5. Import `FormLibModule` from `ngx-form-lib` and add it into the imports array of your module.
```
import { NgModule } from '@angular/core';
import { FormLibModule } from 'ngx-form-lib';

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    FormLibModule,
  ],
})
export class HomeModule {}
```
6. Create a constant file with form configuration. Ide support will provide with autofill for various properties.
```
import { ParentConfig, Input, FormField, FormConfig } from "ngx-form-lib";

export const CONFIG: FormConfig = {
    header: 'Form Header',
    parentConfig: new ParentConfig({
      appearance: 'fill',
      color: 'primary',
    }),
    sections: [
      {
        sectionHeader: 'Section Header',
        fields: [
          new Input({
            subType: 'text',
            field: new FormField({
              type: 'input',
              name: 'money',
              label: 'Enter your name',
              order: 1,
              classes: ['ngf-col-12'],
            }),
          }),
        ],
      },
    ],
  };
  ```


7. Bind the configuration with `config` property of `ngx-for-lib` component.
```
<ngx-form-lib [config]="CONFIG"></ngx-form-lib>
```

## List of supported component

1. Input
2. Textarea
3. Checkbox
4. Radio
5. Button

## Further help

To get more help, issues or any suggestions for the `ngx-form-lib` mail to  `singh.navdeep2510@gmail.com` with subject `ngx-form-lib`.
