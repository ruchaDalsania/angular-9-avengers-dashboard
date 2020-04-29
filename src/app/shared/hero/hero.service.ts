import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeroService {
public API='//localhost:8080';
public HERO_API=this.API+'/heroes';

  constructor(private httpClient : HttpClient) { }

  getAll(): Observable<any>{

  return this.httpClient.get(this.API+'/coolHeroes');
  }

  get(id:string){
  return this.httpClient.get(this.HERO_API+'/'+id);
  }

  save(hero:any): Observable<any>{
  let result : Observable<any>;
  if(hero.href){
  result= this.httpClient.put(hero.href, hero);
  }else{
  result=this.httpClient.post(this.HERO_API, hero);
  }
  return result;
  }

remove(href: string){
	return this.httpClient.delete(href);
}
}
