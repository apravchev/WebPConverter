import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalService } from './global.service';

@Injectable({ providedIn: 'root' })
export class ImagesService {
  API_ENDPOINT = this.gService.API_URL;
  loadImage = (id: String) => this.http.get(this.API_ENDPOINT + '/image/' + id);
  deleteImage = (id: String) =>
    this.http.delete(this.API_ENDPOINT + '/image/' + id);
  constructor(private http: HttpClient, private gService: GlobalService) {}
}
