import { FieldTypeEnum } from '../../shared/enums/field-type.enum';
import { FormField } from '../../shared/models/form-field.model';
import { FieldSubType } from '../input/field-sub-type.model';
import { ButtonAttribute } from './button-attribute.model';

export class Button extends FormField<string> {
  override type = FieldTypeEnum.Button;
  subType: FieldSubType;
  attribute: ButtonAttribute;

  constructor(params: {
    field?: FormField<string>;
    subType?: FieldSubType;
    attribute: ButtonAttribute;
  }) {
    super(params.field);
    this.subType = params.subType || 'button';
    this.attribute = params.attribute || 'mat-button';
  }
}
