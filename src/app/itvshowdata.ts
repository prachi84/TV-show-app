export interface Itvshowdata {
    name:string,
    language:string
    genres:string[],
    runtime:number,
    premiered:Date,
    schedule:{
      time:string,
      days:string[]
    },
    rating:{
      average:number
    },
    network:{
      name:string,
      country:{
        name:string
      }
    },
    image:{
      orginal:string
    },
    summary:string,
    type:string,
    status:string
}

// I noticed that in the JSON show is actually just one big object that contains everything knowing that I updated this interface
