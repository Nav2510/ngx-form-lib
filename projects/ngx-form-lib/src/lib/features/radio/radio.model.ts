import { FieldTypeEnum } from "../../shared/models/field-type.model";
import { Field } from "../../shared/models/field.model";

export class Radio extends Field<string> {
  override type = FieldTypeEnum.Radio;
  showInline: boolean;
  options: { label: string; value: string }[];

  constructor(params: {
    field?: Field<string>;
    options?: { label: string; value: string }[];
    showInline?: boolean;
  }) {
    super(params.field);
    this.showInline = params.showInline || false;
    this.options = params.options || [];
  }
}