import { FormField } from "./form-field.model";

export interface FormConfig {
  config: FormField<any>[]
  dependency: FormConfig;
}