import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({ providedIn: 'root' })
export class ImageHandlerService {
  uploadFiles = (files: File[]) => {
    const data: FormData = new FormData();
    files.forEach((file) => data.append('files', file, file.name));
    return this.http.post(this.global.API_URL + '/files', data, {
      reportProgress: true,
      responseType: 'json',
    });
  };

  constructor(private http: HttpClient, private global: GlobalService) {}
}
