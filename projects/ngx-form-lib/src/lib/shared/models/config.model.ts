import { Section } from "./section.model";
import { ParentConfig } from "./parent-config.model";

export interface Config {
  sections: Section[];
  dependency?: Config;
  header?: string;
  parentConfig: ParentConfig
}