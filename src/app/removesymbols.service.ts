import { Injectable } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Pipe({
  name: 'specialPipe'
})

export class specialPipe implements PipeTransform {

  constructor() { }

  transform(value: string): string {
    var ptag = "</p>";
    var btag = "</b>";
    let newVal = value.replace(/<p>|<b>|[<//]|p>|b>/gi, '') 
    return newVal
  }
  

}

export class RemovesymbolsService {

}