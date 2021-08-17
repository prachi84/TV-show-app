import { Component, OnInit } from '@angular/core';
import { GetAllShows } from '../services/getallshows.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  

  constructor(public AllShows: GetAllShows) { }

  ngOnInit(): void {
  }

}
