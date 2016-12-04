import {Component} from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular/material/icon/icon';
import {MdToolbar} from '@angular/material/toolbar/toolbar';

@Component({
  moduleId: module.id,
  selector: 'toolbar-demo',
  templateUrl: 'toolbar-demo.html',
  styleUrls: ['toolbar-demo.css'],
  //directives: [MdToolbar, MdIcon],
  providers: [MdIconRegistry]
})
export class ToolbarDemo {

}