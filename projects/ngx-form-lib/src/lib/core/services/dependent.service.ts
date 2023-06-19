import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Dependent } from '../../shared/models/dependent.model';

@Injectable({
  providedIn: 'root'
})
export class DependentService {
  setDependentFields(group: FormGroup, dependentsConfig: Dependent[], value: any) {
    const config = dependentsConfig.find((dependent) => dependent.value == value);
    if (config) {
      this.setFieldPropertiesToDefault(group, config);
      switch(config.type) {
        case 'value-change':
          this.setDependentValue(group, config);
          break;
        case 'disabled':
          this.disableDependentField(group, config);
          break;
        case 'hidden':
          this.hideDependentField(group, config);
      }
    }
  }

  setFieldPropertiesToDefault(group: FormGroup, config: Dependent) {
    group.get(config.fieldPath);
  }

  disableDependentField(group: FormGroup, config: Dependent): void {
    if(config.setDependentValueTo === true || config.setDependentValueTo === 'true') {
      group.get(config.fieldPath)?.disable();
    } else if (config.setDependentValueTo === false || config.setDependentValueTo === 'false') {
      group.get(config.fieldPath)?.enable();
    }
  }
  
  setDependentValue(group: FormGroup, config: Dependent): void {
    group.get(config.fieldPath)?.setValue(config.setDependentValueTo);
  }

  hideDependentField(group: FormGroup, config: Dependent): void {
    
  }
}
