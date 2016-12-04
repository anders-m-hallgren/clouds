import {Directive, Input} from '@angular/core';
import {Hero} from './hero.model';

@Directive({
    selector: '[tooltip]',
    properties: [
        'text: tooltip'
    ],
    host: {
        //'(mouseenter)': 'onMouseEnter()',
        //'(mouseleave)': 'onMouseLeave()',
        '(mouseover)': 'show(hero)'
    }
})
export class Tooltip {
    //@Input('tooltip') tooltipText: string;
    @Input() hero: Hero;
    show(tolltipObject) {
        console.log('tooltip:',tolltipObject.tooltipText, tolltipObject );
        //alert(tolltipObject.tooltipText);
    }
}