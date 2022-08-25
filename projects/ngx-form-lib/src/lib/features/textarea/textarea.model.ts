import { FieldTypeEnum } from '../../shared/enums/field-type.enum';
import { FormField } from '../../shared/models/form-field.model';
import { PrefixSuffix } from '../../shared/models/prefix-suffix.model';

export class Textarea extends FormField<string> {
  override type = FieldTypeEnum.Textarea;
  prefix: PrefixSuffix | undefined;
  suffix: PrefixSuffix | undefined;
  rows: number;

  constructor(params: {
    field?: FormField<string>;
    prefix?: PrefixSuffix | undefined;
    suffix?: PrefixSuffix | undefined;
    rows?: number;
  }) {
    super(params.field);
    this.prefix = params.prefix;
    this.suffix = params.suffix;
    this.rows = params.rows || 5;
  }
}
