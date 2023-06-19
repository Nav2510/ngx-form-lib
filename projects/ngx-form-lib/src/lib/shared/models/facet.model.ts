import { Dependent } from "./dependent.model";

export interface Facet {
    hidden?: boolean;
    disabled?: boolean;
    dependents?: Dependent[]
}