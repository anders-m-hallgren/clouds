import {Component, ViewEncapsulation} from '@angular/core';
//import 'rxjs/Rx';
import {HeroComponent}           from '../hero/hero.component';

@Component({
  selector: 'coolApp',
  templateUrl : 'coolApp.html',
  styleUrls: ['coolApp.css'],
  //encapsulation: ViewEncapsulation.Emulated
})
export class CoolAppComponent {
  context = "...";  
  onHover(sourceText) {
      this.context=sourceText;
      console.log("hoovering:" + sourceText);
  }

  ngOnInit() {
    console.log('hello `CoolApp` component');
  }
}
