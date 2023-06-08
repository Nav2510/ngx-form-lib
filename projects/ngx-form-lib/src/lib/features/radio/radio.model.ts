import { FieldTypeEnum } from "../../shared/enums/field-type.enum";
import { Field } from "../../shared/models/field.model";
import { Option } from "../../shared/models/option.model";

export class Radio extends Field<string> {
  override type = FieldTypeEnum.Radio;
  showInline: boolean;
  options: Option[];

  constructor(params: {
    field?: Field<string>;
    options?: Option[];
    showInline?: boolean;
  }) {
    super(params.field);
    this.showInline = params.showInline || false;
    this.options = params.options || [];
  }
}