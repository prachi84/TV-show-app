import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TvshowService {
  constructor(private httpClient: HttpClient) {}
  get TVContainer(show_name: string) {
    return this.httpClient
      .get<Itvshowdata>(`http://api.tvmaze.com/search/shows?q=${show_name}`)
      .pipe();
  }
}
