export interface Dependency{
    type: 'hidden' | 'disabled' | 'value-change';
    value: unknown;
    valueIn?: unknown[];
    fieldPath: string;
    fieldPathIn?: string[];
    setDependentValueTo?: unknown;
}