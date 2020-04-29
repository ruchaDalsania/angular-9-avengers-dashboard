import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

	/* Create your own at https://developers.giphy.com/dashboard/?create=true. */
  giphyApi = '//api.giphy.com/v1/gifs/search?api_key=nOTRbUNMgD5mj4XowN2ERoPNudAkK6ft&limit=1&q=';


  constructor(public httpClient : HttpClient) { }

  get(searchItem) {
  const apiLink = this.giphyApi + searchItem;
  return this.httpClient.get(apiLink).pipe(map((response: any) => {
  if(response.data.length > 0){
  return response.data[0].images.original.url;
  }else{
  return 'https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif';
  }
  }));
  }
}
