import { FieldTypeEnum } from '../../shared/enums/field-type.enum';
import { Field } from '../../shared/models/field.model';
import { FieldSubType } from '../input/field-sub-type.model';
import { ButtonAttribute } from './button-attribute.model';

export class Button extends Field<string> {
  override type = FieldTypeEnum.Button;
  subType: FieldSubType;
  attribute: ButtonAttribute;

  constructor(params: {
    field?: Field<string>;
    subType?: FieldSubType;
    attribute: ButtonAttribute;
  }) {
    super(params.field);
    this.subType = params.subType || 'button';
    this.attribute = params.attribute || 'mat-button';
  }
}
