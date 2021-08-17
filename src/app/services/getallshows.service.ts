import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Itvshow} from '../interfaces/itvshow';
import {map} from 'rxjs/operators';
import { Itvshowdata } from '../interfaces/itvshowdata';

@Injectable({
  providedIn: 'root'
})
export class GetAllShows {
  constructor(private httpClient: HttpClient) {}
  getGenreContainer() {
    return this.httpClient
      .get<Itvshowdata[]>(`http://api.tvmaze.com/shows`)
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
              if (result[i].genres != ["Drama"]){
                result.splice(i)
              }  
            }
            return result
            }
        }
