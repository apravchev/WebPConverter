import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ImagesGridComponent } from '../../components/images-grid/images-grid.component';
import { ImageFilterComponent } from '../../components/image-filter/image-filter.component';
import { AsyncPipe, NgClass } from '@angular/common';
import { UploadActions } from '../../store/actions/upload.actions';
import { getGalleryFiles } from '../../store/selectors/gallery.selectors';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImagesGridComponent, ImageFilterComponent, NgClass, AsyncPipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  active = false;
  images = this.store.select(getGalleryFiles);
  constructor(private store: Store) {}
  onDrop(event) {
    event.preventDefault();
    if (typeof event.dataTransfer.files === 'object') {
      const files: File[] = [];
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        files.push(event.dataTransfer.files.item(i));
      }
      this.store.dispatch(UploadActions.attempt({ files }));
    }
  }
  onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  ngOnInit(): void {}
}
