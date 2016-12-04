import { Component, ViewEncapsulation, Directive, ElementRef, Input, Renderer } from '@angular/core';
//import {AnimationBuilder} from 'angular2/animate';
/*
@Directive({
    selector: '[myFlyin]',
    host: {
        '(mouseenter)': 'onMouseEnter()',
        '(mouseleave)': 'onMouseLeave()'
    }
})
export class HighlightDirective {
    private el: HTMLElement;
    //private _defaultColor: string = 'red'
    private _defaultClassName: string = 'flyin hidden'
    constructor(el: ElementRef) {
        this.el = el.nativeElement;
        //this.move();
    }
    //@Input('myFlyin') highlightColor: string;
    @Input() set class(className: string) {
        this._defaultClassName = className || this._defaultClassName;
    }
    onMouseEnter() {
        //this.highlight(this.highlightColor || this._defaultColor);
        this.move();
    }
    onMouseLeave() {
        //this.highlight(null);
    }

    //public highlight(color: string) {
    //    console.log('setting color:', color);
    //    this.el.style.backgroundColor = color;
    //    this.move();
    //}
    
    private move() {
        this.el.className = this._defaultClassName;
    }
}
*/
@Component({
    //moduleId: module.id,
    selector: 'sitebar',
    //directives: [HighlightDirective],
    templateUrl: 'sitebar.component.html',
    styleUrls: ['sitebar.component.css'],
    //encapsulation: ViewEncapsulation.None
    //animate:[]
})
export class Sitebar {
    flyinClasses: string = "hidden flyin";
    letter1: string = "M";
    letter7: string = "...";
    color: string = "pink"; //bind to Directive

    ngOnInit() {
        setTimeout( () => {
            //console.log('[Sitebar] timeout flyin classes:');
            this.letter1="C"
            this.letter7=".se"
            this.color="yellow";
            this.flyinClasses = "cloudflyin";
        }, 1);
        setTimeout( () => {
            this.color="white";
        }, 3000);
    }
}