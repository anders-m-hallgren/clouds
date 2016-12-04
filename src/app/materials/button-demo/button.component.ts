import {Component} from '@angular/core';
import {MdButton, MdAnchor} from '@angular/material/button/button';
import {MdIcon, MdIconRegistry} from '@angular/material/icon/icon';

@Component({
  moduleId: module.id,
  selector: 'button-demo',
  templateUrl: 'button.html',
  styleUrls: ['button.css'],
  //directives: [MdButton, MdAnchor, MdIcon],
  providers: [MdIconRegistry]
})
export class ButtonDemo {
  isDisabled: boolean = false;
  clickCounter: number = 0;
}
