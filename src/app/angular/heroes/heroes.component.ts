import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Hero} from './hero.model';
import {HeroComponent} from './hero.component';
import {HeroService} from './hero.service';
import {Tooltip} from './tooltip';
import {Observable} from 'rxjs/Observable';

@Component({
    moduleId: module.id,
    selector: 'toh-heroes',
    //templateUrl: 'heroes.component.html',
    template: `
  <div>This is the "Heroes" page</div>
  <h2>Foods</h2>
  <div *ngIf="foods_error">An error occurred while loading the foods!</div>
  <ul>
    <li *ngFor="let food of foods">{{food.name}}</li>
  </ul>
  <!--
  <ul class='heroes'>
    <li *ngFor="let hero of foods">
        <span class='badge'> {{hero.id}}</span>
        {{hero.name}}
    </li>
</ul>
-->
  `,
    //styleUrls: ['heroes.component.css'],
    directives: [HeroComponent, Tooltip],
    providers: [HeroService],
    //encapsulation: ViewEncapsulation.Native
    //template: `<div tooltip="foo">Hello, {{message}}</div>`,
})
export class HeroesComponent implements OnInit {
    public foods_error:Boolean = false;
    public foods: Observable<any[]>;
    public heroes;
    //heroes: Hero[];
    //heroes: any[];
    selectedHero: Hero;
    message="hi clouds.se";
    items: Observable<any[]>;
    heroes_error: boolean= false;
    
    
    constructor(private heroService: HeroService) {
        /*
        var hero: Hero={
            id:"33",
            name:"hulk",
            tooltipText:"someText"
        };
        */
        //this.heroes=[hero];
        console.log('list of heroes:', this.heroes);
    }

    getFoods() {
        this.heroService.getFoods().subscribe(
        data => { this.foods = data},
        err => { this.foods_error = true }
        );
    }
  
    ngOnInit() {
        console.log('init heroComponent');
        this.getFoods();
        
        
        //console.log(this.heroes);
        //this.items=this.heroService.getHeroes();
        /*
        var subscription = this.heroService.getHeroes().subscribe(
            function (x) {
                console.log('Next: ' + x.$key);
            },
            function () {
                console.log('Completed');
            }
        );
        
        @injectred service 
        getBooksAndMovies() {
    Observable.forkJoin(
        this.http.get('/app/books.json').map((res:Response) => res.json()),
        this.http.get('/app/movies.json').map((res:Response) => res.json())
    ).subscribe(
      data => {
        this.books = data[0]
        this.movies = data[1]
      },
      err => console.error(err)
    );
  }
        
        getBooksAndMovies() {
    this._demoService.getBooksAndMovies().subscribe(
      data => {
        this.books = data[0]
        this.movies = data[1]
      }
    );
  }
        */
        
        //this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
        
        /*
        this.heroService.getHeroes().subscribe(
            data => { this.heroes = data},
            err => { this.heroes_error = true }
        );
        */
        
        
         /*this.heroes = [
             { 'id': '11', 'name': 'superman' },
             { 'id': '12', 'name': 'spiderman' },
             { 'id': '13', 'name': 'batman' }
         ]*/
    }
    
    onSelect(hero: Hero) {
        this.selectedHero=hero;
    }
    
    
}