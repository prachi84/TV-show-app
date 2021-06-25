import { Component, OnInit } from '@angular/core';
import { Itvshow } from '../itvshow';
import { GenreService } from '../genre.service';


@Component({
  selector: 'app-drama-genre',
  templateUrl: './drama-genre.component.html',
  styleUrls: ['./drama-genre.component.css']
})
export class DramaGenreComponent implements OnInit {

  current : Itvshow[] =[ {
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

 constructor(private genreservice:GenreService) { }
 ngOnInit(): void {
   for (let i = 0; i < 10; i++) {
    this.genreservice.getGenreContainer().
    subscribe (data => this.current[i] = data[i]);
   };
 }


}
