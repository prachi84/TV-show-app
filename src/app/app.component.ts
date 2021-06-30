import { Component } from '@angular/core';
import { Itvshow } from './itvshow';
import { TvshowService } from './tvshow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TV-show-app';
  currentTv: Itvshow[]=[{
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
  constructor(private tvshowservice:TvshowService){}
  
  ngOnInit():void {
    const defaultView = "Drama";
    for (let i = 0; i < 4; i++)
    {this.tvshowservice.getTVContainer(
      defaultView
    ).subscribe(data => this.currentTv[i] = data[i]);
    }
  };
  
  doSearch(searchValue:string){
    const userInput = searchValue;
    for (let i = 0; i < 10; i++)
    {this.tvshowservice.getTVContainer(
      userInput
    ).subscribe(data => this.currentTv[i] = data[i]);
  };
}

}

