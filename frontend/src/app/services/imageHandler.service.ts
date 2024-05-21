import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { FileFilter } from '../models/fileFilter';
import { PaginationData } from '../models/paginationData';

@Injectable({ providedIn: 'root' })
export class ImageHandlerService {
  uploadFData = (data: FormData) => {
    return this.http.post(this.global.API_URL + '/images', data, {
      reportProgress: true,
      responseType: 'json',
    });
  };
  getImages = (pagination: PaginationData) => {
    return this.http.get(this.global.API_URL + '/images', {
      reportProgress: true,
      responseType: 'json',
      params: {
        first: pagination.first,
        rows: pagination.rows,
      },
    });
  };
  filterImages = (filter?: FileFilter) => {
    return this.http.get(this.global.API_URL + '/images', {
      responseType: 'json',
      params: { query: filter?.search || '' },
    });
  };
  constructor(private http: HttpClient, private global: GlobalService) {}
}
