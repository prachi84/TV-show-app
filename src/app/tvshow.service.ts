import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Itvshowdata} from './itvshowdata';
import {TvshowSearch} from './tvshow-search';
import {environment} from 'src/environments/environment';
import {Itvshow} from './itvshow';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TvshowService {
  constructor(private httpClient: HttpClient) {}
  getTVSearchResults(show_name:string) {
    return this.httpClient.get<TvshowSearch['show']>(`http://api.tvmaze.com/search/shows?q=${show_name}&appid=${environment.appId}`).pipe(map(data => this.transformToItvshow(data))
      )
      }    
  private transformToItvshow(data:TvshowSearch['show']):Itvshow {
    return {
      show_name:data.name,
      genres:data.genres,
      language:data.language,
      runtime:data.runtime,
      premiered:data.premiered,
      schedule_time:data.schedule?.time,
      rating_average:data.rating?.average,
      network_name:data.network?.name,
      network_country_name:data.network?.country.name,
      image_original:data.image?.orginal,
      summary:data.summary,
      type:data.type,
      status:data.status
    }
  }
}