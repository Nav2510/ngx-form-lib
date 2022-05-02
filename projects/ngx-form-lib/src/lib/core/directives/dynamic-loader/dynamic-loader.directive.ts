import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[libDynamicLoader]'
})
export class DynamicLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
