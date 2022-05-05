import { FieldTypeEnum } from '../../shared/models/field-type.model';
import { FormField } from '../../shared/models/form-field.model';
import { PrefixSuffix } from '../../shared/models/prefix-suffix.model';

export class Dropdown extends FormField<string> {
  override type = FieldTypeEnum.Dropdown;
  options: { label: string; value: string }[];
  prefix: PrefixSuffix | undefined;
  suffix: PrefixSuffix | undefined;

  constructor(params: {
    field?: FormField<string>;
    options?: { label: string; value: string }[];
    prefix?: PrefixSuffix | undefined;
    suffix?: PrefixSuffix | undefined;
  }) {
    super(params.field);
    this.options = params.options || [];
    this.prefix = params.prefix;
    this.suffix = params.suffix;
  }
}
