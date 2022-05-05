import { FormField } from "./form-field.model";

export interface FormConfig {
  header?: string;
  config: FormField<any>[];
  dependency: FormConfig;
}