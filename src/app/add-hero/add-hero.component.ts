import { Component, OnDestroy, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroService} from '../shared/hero/hero.service';
import {GiphyService} from '../shared/giphy/giphy.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css']
})
export class AddHeroComponent implements OnInit, OnDestroy {
hero: any={};
sub:Subscription;
  constructor(private route: ActivatedRoute, private router:Router, private heroService: HeroService, private giphyService: GiphyService) { }

  ngOnInit(): void {
  this.sub=this.route.params.subscribe(params => {
  const id= params.id;
  if(id){
  this.heroService.get(id).subscribe((hero:any) => {
  if(hero){
  this.hero=hero;
  this.hero.href=hero._links.self.href;
  this.giphyService.get(hero.name).subscribe(url => hero.giphyUrl = url);
  } else{
  console.log(`Car with id ${id} not found`);
  this.gotoList;
  }
  });
  }
  });

  }

  ngOnDestroy(){
  this.sub.unsubscribe();
  }

  gotoList(){
  this.router.navigate(['/hero-list']);
  }

  save(form: NgForm){
  this.heroService.save(form).subscribe(result => {
  this.gotoList();
  }, error => console.error(error));
  }

remove(href){
	this.heroService.remove(href).subscribe(result => {
	this.gotoList();
	}, error => console.error(error));
}
}
