import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Router, Routes} from '@angular/router';  //FANG

@Component({
  selector: 'app-showdetail-newpage',
  templateUrl: './showdetail-newpage.component.html',
  styleUrls: ['./showdetail-newpage.component.css']
})
export class ShowdetailNewpageComponent implements OnInit {

  current : any;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.current = params;
      console.log(this.current);
      console.log(JSON.stringify(this.current));         
    });
  }

}
