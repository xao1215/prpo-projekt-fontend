import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(datum: string): string {  
    let date: Date = new Date(datum.slice(0,20))
    return date.getHours() + ":" + date.getMinutes()
  }

}
