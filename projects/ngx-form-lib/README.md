![alt text](https://github.com/Nav2510/form-lib-workspace/blob/develop/src/assets/icons/logo-lg.svg?raw=true)


## Create dynamic forms in Angular quickly and effortlessly

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Nav2510_ngx-form-lib&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Nav2510_ngx-form-lib)

This package simplifies Angular form creation with full Angular reactive capabilities by offering a straightforward class configuration. It leverages Angular Material, utilizing material themes for enhanced functionality.

## Homepage

Configure your form directly on [NgxFormLib](https://ngx-form-lib.web.app/) or play with forms on [Stackblitz](https://stackblitz.com/edit/angular-ivy-5hodcd)


## Installation

1. In your angular project run command `npm install --save ngx-form-lib` and install the package.
2. This library use [Angular material](https://material.angular.io/) for themes. So, if you have already setup `Angular material` skip step 4.
3. You also need to install `peer dependencies`. [Installing npm peer dependencies](https://www.npmjs.com/package/npm-install-peers).
4. Setup angular material in your project. [Getting started guide](https://material.angular.io/guide/getting-started).
5. Import `BrowserAnimationModule` in `app.module.ts`.
```javascript
// ... Other imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    ...,
    BrowserAnimationsModule
  ],
  ...,
})
export class AppModule { }
```
6. Import `FormLibModule` from `ngx-form-lib` and add it into the imports array of your module.
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

7. Create a constant file with form configuration. You can directly create form configuration on [NgxFormLib webpage](https://ngx-form-lib.web.app/) and use it in your projects. IDE support will provide with autofill for various properties.
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


8. Bind the configuration with `config` property of `ngx-for-lib` component.
```html
<ngx-form-lib [config]="CONFIG"></ngx-form-lib>
```

### Style error fix

If you find breaking style with material form just install `peer dependencies` manually and rerun the project.

### List of supported component

1. Input
2. Textarea
3. Checkbox
4. Radio
5. Button
6. Dropdown


# Features and releases
### Current features

1. Dynamic components
2. Field Dependencies
3. Facets implementations (hidden, disable, set value)

### Next release version features

1. Form dependencies

# Further help

To get more help, issues or any suggestions for the `ngx-form-lib` mail to  `navdeep.dev2510@gmail.com` with subject `ngx-form-lib`.
