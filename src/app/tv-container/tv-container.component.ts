import { Component, OnInit, Input} from '@angular/core';
import { Itvshow } from '../itvshow';
import { TvshowService } from '../tvshow.service';

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
 ngOnInit(): void {
   
   };
 }
/*created one more variable *//*I have created previous variable to add more components */