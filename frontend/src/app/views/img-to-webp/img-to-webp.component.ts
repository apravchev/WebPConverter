import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { toWebpFiles$ } from '../../store/selectors/upload.selectors';
import { AsyncPipe, NgFor } from '@angular/common';
import { ImagesGridComponent } from '../../components/images-grid/images-grid.component';
import { FileHandlingComponent } from '../../components/file-handling/file-handling.component';

@Component({
  selector: 'app-img-to-webp',
  standalone: true,
  imports: [FileHandlingComponent, NgFor, AsyncPipe, ImagesGridComponent],
  templateUrl: './img-to-webp.component.html',
  styleUrl: './img-to-webp.component.scss',
})
export class ImgToWebpComponent {
  images = this.store.select(toWebpFiles$);
  constructor(private store: Store) {}
}
