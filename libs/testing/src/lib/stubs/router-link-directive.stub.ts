import { Directive, Input } from '@angular/core';

// export for convenience.
export { RouterLink } from '@angular/router';

/* tslint:disable:directive-class-suffix */
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[routerLink]',
  // tslint:disable-next-line:use-host-property-decorator
  host: { '(click)': 'onClick()' },
})
export class RouterLinkDirectiveStub {
  // tslint:disable-next-line:no-input-rename
  @Input('routerLink') linkParams: any;
  navigatedTo: any = null;

  onClick() {
    this.navigatedTo = this.linkParams;
  }
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
