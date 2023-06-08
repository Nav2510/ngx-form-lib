import { FieldTypeEnum } from "../enums/field-type.enum";
import { Appearance } from "./appearance.model";
import { Color } from "./color.model";
import { Validation } from "./validation.model";

export class Field<T> {
  appearance: Appearance | undefined;
  classes: string[];
  color: Color | undefined;
  hint: string;
  label: string;
  method: (param?: any) => any;
  name: string;
  order: number;
  placeholder: string;
  type: FieldTypeEnum;
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
      type?: FieldTypeEnum;
      value?: T;
      validators?: Validation[];
    } = {}
  ) {
    this.appearance = params.appearance;
    this.classes = params.classes || [];
    this.color = params.color;
    this.hint = params.hint || '';
    this.label = params.label || '';
    this.method = params.method === undefined ? () => {} : params.method;
    this.name = params.name || '';
    this.order = params.order === undefined ? 1 : params.order;
    this.placeholder = params.placeholder || '';
    this.type = params.type || FieldTypeEnum.Input;
    this.value = params.value;
    this.validators = params.validators || [];
  }
}
