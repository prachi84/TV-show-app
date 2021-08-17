import { Component, OnInit, Input, NgModule} from '@angular/core';
import { Itvshow } from '../interfaces/itvshow';
import { TvshowService } from '../services/tvshow.service';
import {RouterModule, Router, Routes} from '@angular/router';  //FANG


export class AppRoutingModule { }

@Component({
  selector: 'app-tv-container',
  templateUrl: './tv-container.component.html',
  styleUrls: ['./tv-container.component.css']
})
export class TVContainerComponent implements OnInit {
  @Input() current : Itvshow[] =[ {
    show_name: '',
    genres: [],
    language: '',
    runtime: 0, 
    premiered: new Date(),
    schedule_time: '',
    rating_average: 0,
    network_name: '',
    network_country_name: '',
    image_original: '',
    summary: '',
    type: '',
    status: '',
 }
]
 
 constructor() { }

 ngOnInit():void {
   
   };
 }
/*created one more variable *//*I have created previous variable to add more components */