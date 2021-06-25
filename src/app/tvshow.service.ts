import { HttpClient } from '@angular/common/http';
import { Injectable, ɵsetCurrentInjector } from '@angular/core';
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
      .get<Itvshowdata[]>(`http://api.tvmaze.com/search/shows?q=${show_name}&appid=${environment.appId}`
      )
      .pipe(
        map(data => this.transformToItvshow(data))
      )
      }
      private transformToItvshow(data:Itvshowdata[]):Itvshow[] {   
      var result : Itvshow[] = []
        for (let i=0; i<data.length; i++){
            const myData = data[i];
            result[i] = {
              show_name:myData.show.name,
              genres:myData.show.genres,
              language:myData.show.language,
              runtime:myData.show.runtime,
              premiered:myData.show.premiered,
              schedule_time:myData.show.schedule.time,
              rating_average:myData.show.rating.average,
              network_name:myData.show.network==null?"":myData.show.network.name,
              network_country_name:myData.show.network==null?"":myData.show.network.country.name,
              image_original:myData.show.image==null?"":myData.show.image.medium,
              summary:myData.show.summary,
              type:myData.show.type,
              status:myData.show.status
            };
          }
          return result;
        }
        }