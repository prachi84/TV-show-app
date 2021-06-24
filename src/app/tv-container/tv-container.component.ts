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
previous : Itvshow = {
  show_name: "Good Girls",
  genres: ["Drama"],
  language: "English",
  runtime: 60, 
  premiered: new Date(),
  schedule_time: "22:00",
  rating_average: 7.4,
  network_name: "NBC",
  network_country_name: "United States",
  image_original: "https://static.tvmaze.com/uploads/images/medium_portrait/297/744253.jpg",
  summary: "Good Girls follows three \"good girl\" suburban wives and mothers who suddenly find themselves in desperate circumstances and decide to stop playing it safe, and risk everything to take their power back.",
  type:"Scripted ",
  status:"Running",
}
 constructor(private tvshowService:TvshowService) { }

  ngOnInit(): void {
   this.tvshowService.getTVContainer('girls').
   subscribe (data => this.current = data)
  }

}
/*created one more variable *//*I have created previous variable to add more components */