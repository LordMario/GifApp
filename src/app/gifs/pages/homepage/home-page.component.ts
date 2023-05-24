import { Component, Input } from '@angular/core';
import { Gif } from '../../interface/searchResponse';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html'
})
export class HomepageComponent {

  public gitList : Gif[]=[];

  constructor(private gifService : GifsService){

  }

  get gitSearch(): Gif[]{
    this.gitList=this.gifService.gifSearch;
    return this.gitList;
  }
}
