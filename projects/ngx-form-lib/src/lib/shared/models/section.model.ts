import { Field } from "./field.model";

export interface Section {
  sectionHeader?: string;
  fields: Field<any>[];
}