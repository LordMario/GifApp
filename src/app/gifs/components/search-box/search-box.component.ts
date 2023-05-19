import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template: `
  <h5>Buscar: </h5>
  <input #txtTag (keyup.enter)="searchTag()" 
  type="text" class="form-control" placeholder="Buscar gifs...">
  `,
})
export class SearchBoxComponent {
  @ViewChild('txtTag')
  tagInput! : ElementRef<HTMLInputElement>;

  constructor(private gitService: GifsService){

  }

  searchTag (): void{
    const newTag = this.tagInput.nativeElement.value;
    this.gitService.searchTag(newTag);
    this.tagInput.nativeElement.value='';
  }

}
