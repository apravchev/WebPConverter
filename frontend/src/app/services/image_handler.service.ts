import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../models/response';

@Injectable({ providedIn: 'root' })
export class ImageHandlerService {
  uploadFiles = (data: FormData) => {
    return this.http.post(this.global.API_URL + '/files', data, {
      reportProgress: true,
      responseType: 'json',
    });
  };

  constructor(private http: HttpClient, private global: GlobalService) {}
}
