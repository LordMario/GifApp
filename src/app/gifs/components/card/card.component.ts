import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interface/searchResponse';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit  {
  
  @Input()
  card! : Gif 

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(!this.card){
      throw new Error("Gif property is required");
      ;
      
    }
    
  }

}
