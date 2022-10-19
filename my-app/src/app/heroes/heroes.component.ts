import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero[] = [];

  columns = [
    {
      columnDef: 'id',
      header: 'ID',
      cell: (hero: Hero) => `${hero.id}`,
    },
    {
      columnDef: 'name',
      header: 'Meno',
      cell: (hero: Hero) => `${hero.name}`,
    },
    {
      columnDef: 'lastName',
      header: 'priezvisko',
      cell: (hero: Hero) => `${hero.lastName}`,
    },
  ];
  
  displayedColumns = this.columns.map(c => c.columnDef);

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
