export function AutoUnsubscribe() {
  return function (constructor: any) {
    const ngDestroy = constructor.prototype.ngOnDestroy;
    constructor.prototype.ngOnDestroy = function () {
      for (const prop in this) {
        const property = this[prop];
        if (typeof property.subscribe === 'function') {
          property.unsubscribe();
        }
      }
      ngDestroy.apply();
    };
  };
}
