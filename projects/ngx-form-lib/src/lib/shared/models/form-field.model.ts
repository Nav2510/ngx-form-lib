import { Appearance, AppearanceEnum } from "./appearance.model";
import { Color, ColorEnum } from "./color.model";
import { FieldType } from "./field-type.model";
import { Validation } from "./validation.model";

export class FormField<T> {
  appearance: Appearance;
  classes: string[];
  color: Color;
  hint: string;
  label: string;
  method: (param?: any) => any;
  name: string;
  order: number;
  placeholder: string;
  type: FieldType;
  value: T | undefined;
  validators: Validation[];

  constructor(
    params: {
      appearance?: Appearance;
      classes?: string[];
      color?: Color;
      hint?: string;
      label?: string;
      method?: (param?: any) => any;
      name?: string;
      order?: number;
      placeholder?: string;
      type?: FieldType;
      value?: T;
      validators?: Validation[];
    } = {}
  ) {
    this.appearance = params.appearance || AppearanceEnum.Standard;
    this.classes = params.classes || [];
    this.color = params.color || ColorEnum.Primary;
    this.hint = params.hint || '';
    this.label = params.label || '';
    this.method = params.method === undefined ? () => {} : params.method;
    this.name = params.name || '';
    this.order = params.order === undefined ? 1 : params.order;
    this.placeholder = params.placeholder || '';
    this.type = params.type || 'input';
    this.value = params.value;
    this.validators = params.validators || [];
  }
}
