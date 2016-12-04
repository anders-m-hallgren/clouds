import {Component} from '@angular/core';
import {Hero} from './hero-schema';

@Component({
  //moduleId: module.id,
  selector: 'hero-app',
  templateUrl:'hero.component.html'
  
})
export class HeroComponent {
  title = 'App Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  
  constructor(){

  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
  
  ngOnInit() {
    console.log('hello `toh` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
  
}
let HEROES: Hero[] = [
  { "id": '11', "name": "Mr. Anders", "details":"lite detaljer bara", "state":"inactive" },
  { "id": '12', "name": "Angular", "details":"lite detaljer bara", "state":"inactive" },
  { "id": '13', "name": "Polymer", "details":"lite detaljer bara", "state":"inactive" },
  { "id": '14', "name": "Stålmannen", "details":"lite detaljer bara", "state":"inactive" },
  { "id": '15', "name": "Spindelmannen", "details":"lite detaljer bara", "state":"inactive" }
  ];