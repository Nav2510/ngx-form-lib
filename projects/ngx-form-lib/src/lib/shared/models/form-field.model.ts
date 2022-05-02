import { Appearance } from "./appearance.model";
import { CheckboxLabelPosition } from "./checkbox-label-position.model";
import { Color } from "./color.model";
import { FieldSubType } from "./field-sub-type.model";
import { FieldType } from "./field-type.model";
import { PrefixSuffix } from "./prefix-suffix.model";
import { Validation } from "./validation.model";

// TODO: Move specific element property inside component like label position in side checkbox
export class FormField<T> {
  appearance?: Appearance | undefined;
  labelPosition?: CheckboxLabelPosition; // for checkbox
  classes?: string[];
  color?: Color;
  hint?: string;
  label: string;
  method: (param?: any) => any;
  name: string;
  options: { label: string; value: string }[]; // for dropdown, radio, checkbox
  order: number;
  placeholder: string;
  prefix: PrefixSuffix;
  showInline: boolean;
  subType: FieldSubType | undefined; // for input
  suffix: PrefixSuffix;
  type: FieldType;
  value: T | undefined;
  validators: Validation[];
  constructor(
    params: {
      appearance?: Appearance | undefined;
      labelPosition?: CheckboxLabelPosition;
      classes?: string[];
      color?: Color;
      hint?: string;
      label?: string;
      method?: (param?: any) => any;
      name?: string;
      options?: { label: string; value: string }[];
      order?: number;
      placeholder?: string;
      prefix?: PrefixSuffix;
      showInline?: boolean;
      subType?: FieldSubType | undefined;
      suffix?: PrefixSuffix;
      type?: FieldType;
      value?: T;
      validators?: Validation[];
    } = {}
  ) {
    this.appearance = params.appearance;
    this.labelPosition = params.labelPosition || 'after';
    this.classes = params.classes || [];
    this.color = params.color;
    this.hint = params.hint || '';
    this.label = params.label || '';
    this.method = params.method === undefined ? () => {} : params.method;
    this.name = params.name || '';
    this.options = params.options || [];
    this.order = params.order === undefined ? 1 : params.order;
    this.placeholder = params.placeholder || '';
    this.prefix = params.prefix || ({} as PrefixSuffix);
    this.showInline =  params.showInline || false;
    this.suffix = params.suffix || ({} as PrefixSuffix);
    this.subType = params.subType || 'text';
    this.type = params.type || 'input';
    this.value = params.value;
    this.validators = params.validators || [];
  }
}
