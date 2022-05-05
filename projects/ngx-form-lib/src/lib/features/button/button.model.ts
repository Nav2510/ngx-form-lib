import { FieldTypeEnum } from '../../shared/models/field-type.model';
import { FormField } from '../../shared/models/form-field.model';
import { FieldSubType } from '../input/field-sub-type.model';

export class Button extends FormField<string> {
  override type = FieldTypeEnum.Button;
  subType: FieldSubType;

  constructor(params: {
    field?: FormField<string>;
    subType?: FieldSubType
  }) {
    super(params.field);
    this.subType = params.subType || 'button'
  }
}
