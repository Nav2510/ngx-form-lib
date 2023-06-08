import { FieldTypeEnum } from '../../shared/enums/field-type.enum';
import { Field } from '../../shared/models/field.model';
import { Option } from '../../shared/models/option.model';
import { PrefixSuffix } from '../../shared/models/prefix-suffix.model';

export class Dropdown extends Field<string> {
  override type = FieldTypeEnum.Dropdown;
  options: Option[];
  prefix: PrefixSuffix | undefined;
  suffix: PrefixSuffix | undefined;
  multiple: boolean;
  constructor(params: {
    field?: Field<string>;
    options?: Option[];
    prefix?: PrefixSuffix | undefined;
    suffix?: PrefixSuffix | undefined;
    multiple?: boolean;
  }) {
    super(params.field);
    this.options = params.options || [];
    this.prefix = params.prefix;
    this.suffix = params.suffix;
    this.multiple = params.multiple || false;
  }
}
