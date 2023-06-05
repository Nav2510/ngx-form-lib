import { CheckboxLabelPosition } from "./checkbox-label-position.model";
import { FieldTypeEnum } from "../../shared/models/field-type.model";
import { Field } from "../../shared/models/field.model";

export class Checkbox extends Field<string> {
  override type = FieldTypeEnum.Checkbox;
  labelPosition: CheckboxLabelPosition;
  showInline: boolean;
  indeterminate: boolean;

  constructor(params: {
    field?: Field<string>;
    indeterminate?: boolean;
    labelPosition?: CheckboxLabelPosition;
    showInline?: boolean;
  }) {
    super(params.field);
    this.indeterminate = params.indeterminate || false;
    this.labelPosition = params.labelPosition || 'after';
    this.showInline = params.showInline || false;
  }
}