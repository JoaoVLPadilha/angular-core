import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: "[highlighted]",
  exportAs: "hl"
})
export class HighlightedDirective {
  @Input()
  highlighted: boolean;

  @Output()
  highlightedEmitter = new EventEmitter();

  constructor() {
  }

  @HostBinding("class.highlighted")
  get addClass() {
    return this.highlighted;
  }
  @HostListener("mouseover")
  mouseOver() {
    this.highlighted = true;
    this.highlightedEmitter.emit(true);
  }
  @HostListener("mouseleave")
  mouseLeave() {
    this.highlighted = false;
    this.highlightedEmitter.emit(false);
  }

  toggle(){
    console.log('oi')
    this.highlighted = !this.highlighted;
    this.highlightedEmitter.emit(this.highlighted);
  }
}


