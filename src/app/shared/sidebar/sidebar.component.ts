import { Component, EventEmitter, Output } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {



  constructor(private gitService : GifsService){
  }

  get TagsSearch(){
    return this.gitService.tagsHistory;
  }
}
