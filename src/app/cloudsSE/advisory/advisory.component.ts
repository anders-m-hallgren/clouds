import {Component} from '@angular/core';
import {Advisory} from './advisory-schema';

@Component({
  //moduleId: module.id,
  selector: 'advisory-app',
  templateUrl:'advisory.component.html',
  styleUrls:['advisory.css']
  
})
export class AdvisoryComponent {
  title = 'Cloud Advisories';
  advisories = HEROES;
  selectedHero: Advisory;
  
  constructor(){

  }

  onSelect(hero: Advisory) {
    this.selectedHero = hero;
  }
  
  ngOnInit() {
    console.log('hello `toh` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
  
}
let HEROES: Advisory[] = [
  { "id": '1', "name": "ICT Transformation", "details":"lite detaljer bara", "state":"inactive" },
  { "id": '2', "name": "IT & LOB Converging", "details":"lite detaljer bara", "state":"inactive" },
  { "id": '3', "name": "BI-modal IT", "details":"lite detaljer bara", "state":"inactive" },
  { "id": '4', "name": "eCloud", "details":"lite detaljer bara", "state":"inactive" },
  { "id": '5', "name": "Enterprise Architecture", "details":"lite detaljer bara", "state":"inactive" }
  ];