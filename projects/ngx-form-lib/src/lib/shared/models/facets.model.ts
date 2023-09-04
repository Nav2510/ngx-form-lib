import { Dependency } from "./dependency.model";

export interface Facets {
    hidden?: boolean;
    disabled?: boolean;
    dependencies?: Dependency[];
}