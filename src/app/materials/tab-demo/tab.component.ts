import {Component, ViewEncapsulation} from '@angular/core';
import {MdTab} from '@angular/material/tabs';
import {MdToolbar} from '@angular/material/toolbar/toolbar';
import {MdInput} from '@angular/material/input/input';

@Component({
  moduleId: module.id,
  selector: 'tab-group-demo',
  templateUrl: 'tab.html',
  styleUrls: ['tab.css'],
  //directives: [MD_TABS_DIRECTIVES, MdToolbar, MdInput],
  encapsulation: ViewEncapsulation.None,
})
export class TabDemo {
  tabs = [
    { label: 'Tab One', content: 'This is the body of the first tab' },
    { label: 'Tab Two', content: 'This is the body of the second tab' },
    { label: 'Tab Three', content: 'This is the body of the third tab' },
  ];
}