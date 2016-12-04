import {Component, ViewEncapsulation, Input, HostBinding } from '@angular/core';
import {SlideShowComponent, Direction} from  './slideshow.component';

@Component({
    selector: 'slide',
    //encapsulation: ViewEncapsulation.Emulated,
    template: `
    <div [class.active]="active" class="item text-center">
      <ng-content></ng-content>
    </div>
    `
})
export class Slide {
    @Input() public index:number;
    @Input() public direction:Direction;

    @HostBinding('class.active')
    @Input() public active:boolean;

    @HostBinding('class.item')
    @HostBinding('class.carousel-item')
    private addClass:boolean = true;

    constructor(private slideshow:SlideShowComponent) {
    }

    public ngOnInit() {
        this.slideshow.addSlide(this);
    }

    public ngOnDestroy() {
        this.slideshow.removeSlide(this);
    }
}