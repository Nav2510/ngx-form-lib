![alt text](https://github.com/Nav2510/form-lib-workspace/blob/develop/src/assets/icons/logo-lg.svg?raw=true)

**Build dynamic form in Angular, easy and fast.**

This project let you create different angular forms with all the features of angular reactive by providing basic class configuration. It user angular materials under the hook taking advantage of material themes.

## Homepage

Configure your form directly on [NgxFormLib](https://ngx-form-lib.web.app/) or play with forms on [Stackblitz](https://stackblitz.com/edit/angular-ivy-5hodcd)


## Installation

1. In your angular project run command `npm install --save ngx-form-lib` and install the package.
2. This library use [Angular material](https://material.angular.io/) for themes. So, if you have already setup `Angular material` skip step 3.
3. You also need to install `peer dependencies`. [Installing npm peer dependencies](https://www.npmjs.com/package/npm-install-peers).
4. Setup angular material in your project. [Getting started guide](https://material.angular.io/guide/getting-started).
5. Import `FormLibModule` from `ngx-form-lib` and add it into the imports array of your module.
```javascript
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
6. Create a constant file with form configuration. You can directly create form configuration on [NgxFormLib webpage](https://ngx-form-lib.web.app/) and use it in your projects. IDE support will provide with autofill for various properties.
```javascript
import { ParentConfig, Input, Field, Config } from "ngx-form-lib";

export const CONFIG: Config = {
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
            field: new Field({
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
```html
<ngx-form-lib [config]="CONFIG"></ngx-form-lib>
```

## List of supported component

1. Input
2. Textarea
3. Checkbox
4. Radio
5. Button
6. Dropdown

## Style error fix

If you find breaking style with material form just install `peer dependencies` manually and rerun the project.

## Next major version release

1. Field dependencies
2. Form dependencies
3. Facets (hidden, disable, set value)

## Further help

To get more help, issues or any suggestions for the `ngx-form-lib` mail to  `navdeep.dev2510@gmail.com` with subject `ngx-form-lib`.
