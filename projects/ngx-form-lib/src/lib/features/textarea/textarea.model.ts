import { FieldTypeEnum } from '../../shared/enums/field-type.enum';
import { Field } from '../../shared/models/field.model';
import { PrefixSuffix } from '../../shared/models/prefix-suffix.model';

export class Textarea extends Field<string> {
  override type = FieldTypeEnum.Textarea;
  prefix?: PrefixSuffix;
  suffix?: PrefixSuffix;
  rows: number;

  constructor(params: {
    field?: Field<string>;
    prefix?: PrefixSuffix;
    suffix?: PrefixSuffix;
    rows?: number;
  }) {
    super(params.field);
    this.prefix = params.prefix;
    this.suffix = params.suffix;
    this.rows = params.rows ?? 5;
  }
}
