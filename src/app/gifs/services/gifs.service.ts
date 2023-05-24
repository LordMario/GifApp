import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchResponse, Gif } from '../interface/searchResponse';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http : HttpClient ) {
    this.LocalStorage();
    if(this._tagsHistory.length>0){
      this.searchTag(this._tagsHistory[0]);
    }
  }

  private apiKeyGif: string ='DeLc4Ua2rjaNoYnq1eOdatWUs26bSolY';
  private urlGif : string ='https://api.giphy.com/v1/gifs';
  private _tagsHistory : string []=[];


  public gifSearch : Gif[] =[];

  private organizeHistory(tag:string):void{
    tag= tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter(x=> {
        return x!==tag;
        ;
      });
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,9);
    this.safeLocalStorage();
  }

  get tagsHistory(): string []{
    //return this._tagsHistory;
    return [...this._tagsHistory];
  }

  searchTag(tag: string ): void{
    if(tag.length==0) return;
    this.organizeHistory(tag);
    const params = new HttpParams()
    .set('key', this.apiKeyGif)
    .set('q', tag)
    .set('limit', 10);

    this.http.get<SearchResponse>(`${this.urlGif}/search`,{params})
      .subscribe(resp=>{
        this.gifSearch =resp.data;
      })
  }

  private safeLocalStorage():void{
    localStorage.setItem('history',JSON.stringify( this._tagsHistory));
  }

  private LocalStorage () :void{
    const local = localStorage.getItem('history');
    if(local){
      this._tagsHistory.push(...(JSON.parse(local)));
    }else{
      return;
    }
  }


}

