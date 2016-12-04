import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({ selector: '[cloudblue]' })
/** Highlight the attached element in cloudblue */
export class CloudblueDirective {
  constructor(renderer: Renderer, el: ElementRef) {
    renderer.setElementStyle(el.nativeElement,'background', 'radial-gradient(ellipse at center, #b1c7d8 0%,#8385c6 18%,#5154ad 34%,#13008e 67%,#080068 84%,#000c28 100%)');
    renderer.setElementStyle(el.nativeElement,'color','white');
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}