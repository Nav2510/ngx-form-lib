import { FormSection } from "./form-section.model";
import { ParentConfig } from "./parent-config.model";

export interface FormConfig {
  sections: FormSection[];
  dependency?: FormConfig;
  header?: string;
  parentConfig: ParentConfig
}