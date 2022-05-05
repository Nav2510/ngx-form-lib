import { Appearance } from "./appearance.model";
import { Color } from "./color.model";

export class ParentConfig {
  appearance: Appearance;
  color: Color;
  constructor(param: {
    appearance: Appearance,
    color: Color
  }) {
    this.appearance = param.appearance|| 'standard'
    this.color = param.color || 'primary'
  }
}