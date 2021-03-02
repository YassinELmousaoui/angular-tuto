import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes = of(HEROES);
  constructor(private messageService: MessageService) { 

  }

getHeroes(): Observable<Hero[]> {
  this.heroes = of(HEROES);
  this.messageService.add('HeroService: fetched heroes');
  return this.heroes;
}

addHero(newHero : Hero): void {
  console.log(newHero)
  this.heroes.subscribe(heroes =>{
    heroes.push(newHero);
    console.log(heroes)
  })
  
}
}
