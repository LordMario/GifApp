import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private http : HttpClient ) { }

  private apiKeyGif: string ='DeLc4Ua2rjaNoYnq1eOdatWUs26bSolY';
  private urlGif : string ='https://api.giphy.com/v1/gifs';
  private _tagsHistory : string []=[];

  private organizeHistory(tag:string){
    tag= tag.toLowerCase();

    if(this._tagsHistory.includes(tag)){
      this._tagsHistory = this._tagsHistory.filter(x=> {
        return x!==tag;
        ;
      });
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0,9);
  }

  get tagsHistory(){
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


    this.http.get(`${this.urlGif}/search`,{params})
      .subscribe(resp=>{
        console.log(resp);
      })
  }


}

