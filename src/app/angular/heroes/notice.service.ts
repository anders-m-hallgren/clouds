import {Observable} from 'rxjs/Observable';
import {HeroService} from './hero.service';

export class NoticeService {
  public notice: Observable<any>;
  private observer: any;

  constructor(private heroService: HeroService) {
    this.notice = new Observable(observer => {
      this.observer = observer;
    }).share();
  }

  create(value: string) {
  this.heroService.getHeroes().subscribe(translatedValue => { 
    this.observer.next(translatedValue);
  });
}
}