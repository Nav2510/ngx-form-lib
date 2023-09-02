import { Dependent } from "./dependent.model";

export interface Facets {
    hidden?: boolean;
    disabled?: boolean;
    dependents?: Dependent[];
}