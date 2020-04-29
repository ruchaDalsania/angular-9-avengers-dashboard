import { Component, OnInit } from '@angular/core';
import {HeroService} from '../shared/hero/hero.service';
import {GiphyService} from '../shared/giphy/giphy.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
heroes:Array<any>;

  constructor(private heroService : HeroService, private giphyService : GiphyService) { }

  ngOnInit(){
  	this.heroService.getAll().subscribe(data => {
  	
  	this.heroes = data;
  	for(const hero of this.heroes){
  	this.giphyService.get(hero.name).subscribe(url => hero.giphyUrl = url);
  	}
  	});
  }

}
