import { FieldSubType } from './field-sub-type.model';
import { FormField } from '../../shared/models/form-field.model';
import { PrefixSuffix } from '../../shared/models/prefix-suffix.model';
import { FieldTypeEnum } from '../../shared/enums/field-type.enum';

export class Input extends FormField<string> {
  override type = FieldTypeEnum.Input;
  prefix: PrefixSuffix | undefined;
  subType: FieldSubType;
  suffix: PrefixSuffix | undefined;

  constructor(params: {
    field?: FormField<string>;
    prefix?: PrefixSuffix;
    subType?: FieldSubType;
    suffix?: PrefixSuffix;
  }) {
    super(params.field);
    this.subType = params.subType || 'text';
      this.prefix = params.prefix;
      this.suffix = params.suffix;
  }
}
