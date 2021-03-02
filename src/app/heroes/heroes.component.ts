import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero ?: Hero ;
  heroes : Hero[] = [];
  constructor(private heroService: HeroService , private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  addHero(): void {
    this.heroService.addHero({
      id:25,name:"yassine",img:"https://fakeimg.pl/200x200/?text=yassine"
    })
    this.getHeroes();
    //console.log(this.heroes);
  }

}
