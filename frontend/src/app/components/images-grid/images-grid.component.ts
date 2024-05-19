import { Component, Input } from '@angular/core';
import { FileInfo } from '../../models/fileInfo';
import { CommonModule } from '@angular/common';
import { ImageContainerComponent } from '../image-container/image-container.component';
import { DataViewModule } from 'primeng/dataview';

@Component({
  selector: 'app-images-grid',
  standalone: true,
  imports: [ImageContainerComponent, CommonModule, DataViewModule],
  templateUrl: './images-grid.component.html',
  styleUrl: './images-grid.component.scss',
})
export class ImagesGridComponent {
  @Input() images: FileInfo[] = [];
  @Input() pages: number = 0;
  @Input() currentPage: number = 0;
  @Input() total: number = 0;
  style: 'vertical' | 'grid' = 'vertical';
  createPages(count): any[] {
    return new Array(count).map((i, idx) => (i = idx + 1));
  }
  constructor() {}
}
