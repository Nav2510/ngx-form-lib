import { FieldTypeEnum } from "../../shared/enums/field-type.enum";
import { FormField } from "../../shared/models/form-field.model";
import { Option } from "../../shared/models/option.model";

export class Radio extends FormField<string> {
  override type = FieldTypeEnum.Radio;
  showInline: boolean;
  options: Option[];

  constructor(params: {
    field?: FormField<string>;
    options?: Option[];
    showInline?: boolean;
  }) {
    super(params.field);
    this.showInline = params.showInline || false;
    this.options = params.options || [];
  }
}