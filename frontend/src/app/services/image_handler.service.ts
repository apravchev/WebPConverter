import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({ providedIn: 'root' })
export class ImageHandlerService {
  uploadFData = (data: FormData) => {
    return this.http.post(this.global.API_URL + '/images', data, {
      reportProgress: true,
      responseType: 'json',
    });
  };
  getImages = () => {
    return this.http.get(this.global.API_URL + '/images', {
      reportProgress: true,
      responseType: 'json',
    });
  };
  constructor(private http: HttpClient, private global: GlobalService) {}
}
