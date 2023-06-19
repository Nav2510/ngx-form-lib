export interface Dependent {
    type: 'hidden' | 'disabled' | 'value-change'
    value: any;
    fieldPath: string;
    setDependentValueTo?: any;
}