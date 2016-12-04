import {Component, OnInit} from '@angular/core';
import {Advisory}              from './advisory-schema';
import {AdvisoryService}       from './advisory.service';

@Component({
  selector: 'advisory-list',
  template: `
  <h3>Heroes:</h3>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
    </li>
  </ul>
  New Hero:
  <input #newHero />
  <button (click)="addHero(newHero.value); newHero.value=''">
    Add Hero
  </button>
  <div class="error" *ngIf="errorMessage">{{errorMessage}}</div>
  `,
  styles: ['.error {color:red;}']
})
export class HeroListComponent implements OnInit {

  constructor (private _heroService: AdvisoryService) {}

  errorMessage: string;
  advisories:Advisory[];

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this._heroService.getHeroes()
                     .subscribe(
                       heroes => this.advisories = heroes,
                       error =>  this.errorMessage = <any>error);
  }

  addHero (name: string) {
    if (!name) {return;}
    this._heroService.addHero(name)
                     .subscribe(
                       hero  => this.advisories.push(hero),
                       error =>  this.errorMessage = <any>error);
  }
}