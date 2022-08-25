import { CheckboxLabelPosition } from "./checkbox-label-position.model";
import { FormField } from "../../shared/models/form-field.model";
import { FieldTypeEnum } from "../../shared/enums/field-type.enum";

export class Checkbox extends FormField<string> {
  override type = FieldTypeEnum.Checkbox;
  labelPosition: CheckboxLabelPosition;
  showInline: boolean;
  indeterminate: boolean;

  constructor(params: {
    field?: FormField<string>;
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