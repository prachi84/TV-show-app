import { Component, OnInit } from '@angular/core';
import { Itvshow } from '../itvshow';
import { TvshowService } from '../tvshow.service';

@Component({
  selector: 'app-tv-container',
  templateUrl: './tv-container.component.html',
  styleUrls: ['./tv-container.component.css']
})
export class TVContainerComponent implements OnInit {

  current : Itvshow = {
  show_name: 'string',
  language: 'string',
  type:'string',
  status:'string',
  genres:'string'[],
  runtime:'number',
  premiered:'Date',
  schedule_time:'Date',
  rating_average: number,
  network_name:'number',
  network_country_name:'string',
  image_original: 'string',
  summary: 'string',




  }
  
 constructor(private tvshowservice:TvshowService) { }

  ngOnInit(): void {
   this.tvshowservice.getTVContainer('show_name: string').
   subscribe (data => this.current = data)
  }

}
