import {Component, ViewEncapsulation} from '@angular/core';
//import 'rxjs/Rx';
import {AdvisoryComponent}           from '../advisory/advisory.component';

@Component({
  selector: 'cloudApp',
  templateUrl : 'cloudApp.html',
  styleUrls: ['cloudApp.css'],
  //encapsulation: ViewEncapsulation.Emulated
})
export class CloudAppComponent {
  context = "...";  
  onHover(sourceText) {
      this.context=sourceText;
      console.log("hoovering:" + sourceText);
  }

  ngOnInit() {
    console.log('hello `CloudApp` component');
  }
}
