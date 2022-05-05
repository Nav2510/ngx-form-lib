import { FieldTypeEnum } from "../../shared/models/field-type.model";
import { FormField } from "../../shared/models/form-field.model";

export class Radio extends FormField<string> {
  override type = FieldTypeEnum.Radio;
  showInline: boolean;
  options: { label: string; value: string }[];

  constructor(params: {
    field?: FormField<string>;
    options?: { label: string; value: string }[];
    showInline?: boolean;
  }) {
    super(params.field);
    this.showInline = params.showInline || false;
    this.options = params.options || [];
  }
}