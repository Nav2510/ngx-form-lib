export enum ValidationTypeEnum {
  Email = 'email',
  Required = 'required',
  Min = 'min',
  Max = 'max',
  MinLength = 'minlength',
  MaxLength = 'maxlength',
}

export type ValidationType =
  | 'email'
  | 'required'
  | 'min'
  | 'max'
  | 'minlength'
  | 'maxlength';
