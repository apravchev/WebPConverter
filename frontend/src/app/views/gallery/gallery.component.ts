import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ImagesGridComponent } from '../../components/images-grid/images-grid.component';
import { AsyncPipe, NgClass, NgFor } from '@angular/common';
import { UploadActions } from '../../store/actions/upload.actions';
import { GalleryActions } from '../../store/actions/gallery.actions';
import {
  getGalleryCount,
  getGalleryFiles,
  getGalleryLoading,
  getGalleryRows,
} from '../../store/selectors/gallery.selectors';
import { PaginationData } from '../../models/paginationData';
import { ImageFilterComponent } from '../../components/image-filter/image-filter.component';
import { FileFilter } from '../../models/fileFilter';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    ImagesGridComponent,
    ImageFilterComponent,
    NgClass,
    AsyncPipe,
    NgFor,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  images = this.store.select(getGalleryFiles);
  total = this.store.select(getGalleryCount);
  loading = this.store.select(getGalleryLoading);
  rows = this.store.select(getGalleryRows);
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
  getImages(first: number, rows: number) {
    this.store.dispatch(
      GalleryActions.changeParams({ first: first, rows: rows })
    );
  }
  changePage(ev: PaginationData) {
    this.getImages(ev.first, ev.rows);
  }
  applyFilter(ev: FileFilter) {
    console.log(ev);
    this.store.dispatch(GalleryActions.changeFilter(ev));
  }
  onDragOver(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  ngOnInit(): void {
    this.getImages(0, 12);
  }
}
