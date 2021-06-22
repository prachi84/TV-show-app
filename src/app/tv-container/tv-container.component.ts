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
  language: '',
  type:'',
  status:''

  }
  
 constructor(private tvshowservice:TvshowService) { }

  ngOnInit(): void {
   this.tvshowservice.getTVContainer('show_name: string').
   subscribe (data => this.current = data)
  }

}
