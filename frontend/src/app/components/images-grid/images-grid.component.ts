import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FileInfo } from '../../models/fileInfo';
import { CommonModule } from '@angular/common';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { DataViewModule } from 'primeng/dataview';
import { FileFilter } from '../../models/fileFilter';
import { LazyLoadEvent } from 'primeng/api';
import { PaginationData } from '../../models/paginationData';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-images-grid',
  standalone: true,
  imports: [
    ImageContainerComponent,
    CommonModule,
    DataViewModule,
    LoadingSpinnerComponent,
  ],
  templateUrl: './images-grid.component.html',
  styleUrl: './images-grid.component.scss',
})
export class ImagesGridComponent {
  @Input() images: FileInfo[] = [];
  @Input() pages: number = 0;
  @Input() currentPage: number = 0;
  @Input() total: number = 0;
  @Input() rows: number = 0;
  @Input() loading = false;
  @Output() queryChange = new EventEmitter<PaginationData>();
  style: 'vertical' | 'grid' = 'vertical';
  createPages(count): any[] {
    return new Array(count).map((i, idx) => (i = idx + 1));
  }
  loadImages(ev: LazyLoadEvent) {
    this.queryChange.emit({
      first: ev.first || 0,
      rows: ev.rows || 0,
    });
  }
  trackByFn = (idx, image) => image.id;
  constructor() {}
}
