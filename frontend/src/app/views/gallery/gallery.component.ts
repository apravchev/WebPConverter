import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ImagesGridComponent } from '../../components/images-grid/images-grid.component';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { UploadActions } from '../../store/actions/upload.actions';
import { GalleryActions } from '../../store/actions/gallery.actions';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImagesGridComponent, NgClass, AsyncPipe, NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  active = false;
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
