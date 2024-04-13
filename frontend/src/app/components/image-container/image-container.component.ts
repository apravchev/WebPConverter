import { Component, Input } from '@angular/core';
import { UploadedFile } from '../../models/uploaded.file.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [NgIf],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.scss',
})
export class ImageContainerComponent {
  @Input() image?: UploadedFile;
}
