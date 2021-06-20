
export interface Itvshow {
  show_name: string,
  genres: string[],
  language: string,
  runtime: number, 
  premiered: Date,
  schedule_time: string,
  rating_average: number,
  network_name: string,
  network_country_name: string,
  image_original: string,
  summary: string,
  type:string,
  status:string,
}
// I changed some of the types so they would match tvshowdata, i also added in type and status