import { Component } from '@angular/core';
import { FileUploadComponent } from '../../components/file-upload/file-upload.component';
import { Store } from '@ngrx/store';
import { toWebpFiles$ } from '../../store/selectors/upload.selectors';
import { AsyncPipe, NgFor } from '@angular/common';
import { ImageContainerComponent } from '../../components/image-container/image-container.component';
import { ImagesGridComponent } from '../../components/images-grid/images-grid.component';

@Component({
  selector: 'app-img-to-webp',
  standalone: true,
  imports: [FileUploadComponent, NgFor, AsyncPipe, ImagesGridComponent],
  templateUrl: './img-to-webp.component.html',
  styleUrl: './img-to-webp.component.scss',
})
export class ImgToWebpComponent {
  images = this.store.select(toWebpFiles$);
  constructor(private store: Store) {}
}
