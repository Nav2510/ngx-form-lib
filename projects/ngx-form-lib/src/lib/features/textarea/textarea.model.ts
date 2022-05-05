import { FieldTypeEnum } from '../../shared/models/field-type.model';
import { FormField } from '../../shared/models/form-field.model';
import { PrefixSuffix } from '../../shared/models/prefix-suffix.model';

export class Textarea extends FormField<string> {
  override type = FieldTypeEnum.Textarea;
  prefix: PrefixSuffix | undefined;
  suffix: PrefixSuffix | undefined;

  constructor(params: {
    field?: FormField<string>;
    prefix?: PrefixSuffix | undefined;
    suffix?: PrefixSuffix | undefined;
  }) {
    super(params.field);
    this.prefix = params.prefix;
    this.suffix = params.suffix;
  }
}
