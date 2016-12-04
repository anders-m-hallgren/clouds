import {
  Component, Input, trigger, state, style, transition,
  animate
} from '@angular/core';
//import { HeroService } from '../hero/hero.service';
import { Content } from './content-schema';

@Component({
  selector: 'front-root',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css'],
  animations: [
    trigger('contentState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('1000ms ease-in')),
      transition('active => inactive', animate('1000ms ease-out'))
    ]),

    trigger('flyInOut', [
      state('in', style({
        backgroundColor: '#000',
        color: '#FFF',
        transform: 'translateX(0)'
      })),
      state('out', style({
        backgroundColor: '#cfd8dc',
        transform: 'translateX(-100%)'
      })),
      transition('out => in', animate('1000ms ease-in')),
      transition('in => out', animate('1000ms ease-out')),
      transition('void => *', [
        style({
          backgroundColor: '#cfd8dc',
          transform: 'translateX(-100%)'
        }),
        animate('1000ms ease-in')
      ]),
      transition('* => void', [
        animate(100, style({
          backgroundColor: '#cfd8dc',
          transform: 'translateX(100%)'
        }))
      ])
    ]),

    trigger('fireAndForget', [
      transition('inactive => active', [
        style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.3)'
        }),
        animate('80ms ease-in', style({
          backgroundColor: '#eee',
          transform: 'scale(1)'
        }))
      ]),
    ])
  ]
})
export class FrontComponent {
  subtitle = 'VILL DU HA HJÄLP MED ATT DEFINIERA ELLER GENOMFÖRA DIN MOLN STRATEGI?';
  title = 'ATT FUNDERA PÅ';
  selected: Content;
  funderingar: Content[] = [
    { "text": "Hur vet jag om molntjänster är för mig?", "state": "inactive" },
    { "text": "Vilken säkerhet och typ av ägandeskap av data kräver min verksamhet?", "state": "inactive" },
    { "text": "Hur ser min verksamhet ut om ett eller fem år?", "state": "inactive" },
    { "text": "Vilka processer är lämpliga att effektivisera i en pilot med en ny lösning?", "state": "inactive" },
    { "text": "Hur ska dina medarbetare ta åt sig av den nya tekniken?", "state": "inactive" },
    { "text": "Hur ska jag förbereda mig för att göra rätt val av tjänst och partner?", "state": "inactive" },
    { "text": "Hur kan jag kontinuerligt få svar om effekter av hypoteser på min verksamhet?", "state": "inactive" },
    { "text": "Hur kan jag säkerställa en långsiktig anpassning till förändringar?", "state": "inactive" },
    { "text": 'Hur långt har organisationen kommit på moln resan och via vilka delmål är den på väg.', "state": "in" }
  ];
  contents: Content[] = [
    { "text": 'Denna sida är byggd med Angular 2 och körs på AWS', "state": "in" },
    { "text": 'Källkoden finns på github', "state": "in" }

  ];
  addContent(newContent: string) {
    if (newContent) {
      this.contents.push({ "text": newContent, "state": "in" });
    }
  }

  //@Input() heroes: Heroes;
  toggleState(content: Content) {
    if (content.state == "active") {
      content.state = "inactive";
    } else {
      content.state = "active";
    }
    this.selected = content;
    console.log('toggle:' + this.selected.text);
  }

  toggleContentState(content: Content) {
    if (content.state == "in") {
      content.state = "out";
    } else {
      content.state = "in";
    }
    //this.selected=content;
    console.log('toggle:' + content.text);
  }

}



