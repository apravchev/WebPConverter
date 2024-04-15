import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'filename',
})
export class FilenamePipe implements PipeTransform {
  transform(value: String, ...args: any[]) {
    if (('' + value).length > 15) {
      value =
        value.split('.')[0].substring(0, 10) + '...' + value.split('.')[1];
    }
    return value;
  }
}
