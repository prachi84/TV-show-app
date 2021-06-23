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
    show_name: "Girls",
    genres: ["Drama"],
    language: "English",
    runtime: 90, 
    premiered: new Date(),
    schedule_time: "22:00",
    rating_average: 6.6,
    network_name: "HBO",
    network_country_name: "United States",
    image_original: "https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
    summary: "This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.",
    type:"Scripted ",
    status:"Ended",
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
 constructor(private tvshowservice:TvshowService) { }

  ngOnInit(): void {
   this.tvshowservice.getTVContainer('show_name: string').
   subscribe (data => this.current = data)
  }

}
/*created one more variable *//*I have created previous variable to add more components */