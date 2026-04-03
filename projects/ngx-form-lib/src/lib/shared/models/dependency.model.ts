export interface Dependency<T = unknown> {
  type: 'hidden' | 'disabled' | 'value-change';
  value: T;
  valueIn?: unknown[];
  fieldPath: string;
  fieldPathIn?: string[];
  setDependentValueTo?: T;
}
