import { FormField } from "./form-field.model";

export interface FormSection {
  sectionHeader?: string;
  fields: FormField<any>[];
}