import { Component, Input, Output } from '@angular/core';
import { UploadedFile } from '../../models/uploaded.file.model';
import { NgClass, NgIf } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { FilesizePipe } from '../../pipes/filesize.pipe';
import { FilenamePipe } from '../../pipes/filename.pipe';

@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [NgIf, FilesizePipe, NgClass, FilenamePipe],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.scss',
})
export class ImageContainerComponent {
  @Input() image?: UploadedFile;
  editImage(image: UploadedFile) {}
  deleteImage(image: UploadedFile) {}
  display = false;
  host = this.gService.BASE_URL;
  constructor(private gService: GlobalService) {}
}
