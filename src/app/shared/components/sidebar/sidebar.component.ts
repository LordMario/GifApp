import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gitService : GifsService){
  }

  get TagsSearch(): string []{
    return this.gitService.tagsHistory;
  }

  searchTag(tag :string): void{
    this.gitService.searchTag(tag);
  }
}