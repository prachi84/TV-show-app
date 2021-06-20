import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Itvshowdata} from './itvshowdata';
import {environment} from 'src/environments/environment';
import {Itvshow} from './itvshow';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TvshowService {
  constructor(private httpClient: HttpClient) {}
  getTVContainer(show_name: string) {
    return this.httpClient
      .get<Itvshowdata>(`http://api.tvmaze.com/search/shows?q=${show_name}&appid=${environment.appId}`)
      .pipe();
  } 

  private transformToTVShow(data:Itvshowdata):Itvshow {
    return {
      show_name:data.show.name,
      genres:data.show.genres,
      language:data.show.language,
      runtime:data.show.runtime,
      premiered:data.show.premiered,
      schedule_time:data.show.schedule.time,
      rating_average:data.show.rating.average,
      network_name:data.show.network.name,
      network_country_name:data.show.network.country.name,
      image_original:data.show.image.orginal,
      summary:data.show.summary,
      type:data.show.type,
      status:data.show.status
    }
  }
}
