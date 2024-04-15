import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'filesize',
})
export class FilesizePipe implements PipeTransform {
  transform(bytes: number, precision: number = 2): string {
    if (isNaN(parseFloat(String(bytes))) || !isFinite(bytes)) return '-';
    if (bytes === 0) return '0 bytes';

    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const k = 1024;
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return (
      parseFloat((bytes / Math.pow(k, i)).toFixed(precision)) + ' ' + units[i]
    );
  }
}
