import { ValidationType } from "./validation-type.model";

export interface Validation {
  type: ValidationType;
  value: any;
  message?: string;
  showDynamicError?: boolean;
}
