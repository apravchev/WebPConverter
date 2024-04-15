import { Component, Input } from '@angular/core';
import { UploadedFile } from '../../models/uploaded.file.model';
import { CommonModule } from '@angular/common';
import { ImageContainerComponent } from '../image-container/image-container.component';

@Component({
  selector: 'app-images-grid',
  standalone: true,
  imports: [ImageContainerComponent, CommonModule],
  templateUrl: './images-grid.component.html',
  styleUrl: './images-grid.component.scss',
})
export class ImagesGridComponent {
  @Input() images: UploadedFile[] = [];
  style: 'vertical' | 'grid' = 'vertical';
  constructor() {}
}
