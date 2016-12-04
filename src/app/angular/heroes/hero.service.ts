import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';
import {Hero} from './hero.model';
@Injectable()
export class HeroService {
  angularFire : AngularFire;
  useFire: boolean=false;
  //heroes: Hero[];
  public heroes;
  
  constructor(private af: AngularFire, private http: Http) {
    this.angularFire=af;
  }
  
  getFoods() {
    return this.http.get('/heroes.json').map((res:Response) => res.json());
  }
  
  getHeroes() {
    if (this.useFire === true) {
      console.log('fetching from firebase');
      /*this.angularFire.list('/').forEach(element => {
        console.log('Element key: ', element[0]['$key']);
        console.log('Element value: ', element[0]['$value']);
      });*/
      return this.angularFire.list('/').map(response => response);
    } else {
      console.log('fetching local json');
      
      //return new Observable(observer => {
      //this.observer = observer;
      //}).share();
      
      this.http.get('/heroes.json')
      .map((res:Response) => res.json())
      .subscribe(
        data => { this.heroes = data},
        err => console.error(err),
        () => console.log('done local fetching')
      );
      console.log(this.heroes);
      /*
      return this.http.get('/heroes.json') //defined for demo in server.ts
        .retry(2)
        .do(x => console.log(x.json()))
        .map((res: Response) => res.json());
      */
      /*
      return {
            id:"33",
            name:"hulk",
            tooltipText:"someText"
        };*/
    }
  }
  
  //create(value: string) {
  //this.translate.get(value).subscribe(translatedValue => { 
  //  this.observer.next(translatedValue);
  //});

}

/*
@Injectable()
export class HeroService {

    constructor(private http: Http) { }
    getHeroes() {
        return this.http.get('app/heroes/heroes.json')
        .map((res: Response) => res.json());
        // return [
        //     { 'id': '11', 'name': 'superman' },
        //     { 'id': '12', 'name': 'spiderman' },
        //     { 'id': '13', 'name': 'batman' }
        // ]
    }
}
*/