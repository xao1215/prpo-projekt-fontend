import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datum'
})
export class DatumPipe implements PipeTransform {

  transform(datum: string): string {
    let date: Date = new Date(datum)
    let s:string = date + ""
    
    return s.slice(0,15)
  }

}
