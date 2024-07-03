import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlighted]',
})
export class HighlightedDirective {
  @Input()
  highlighted = false;

  constructor() {
    console.log('oi')
  }

  @HostBinding('class.highlighted')
  get addClass(){
    return this.highlighted;
  }
}
