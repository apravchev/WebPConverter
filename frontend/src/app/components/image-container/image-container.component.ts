import { Component, Input, Output } from '@angular/core';
import { FileInfo } from '../../models/fileInfo';
import { NgClass, NgIf } from '@angular/common';
import { GlobalService } from '../../services/global.service';
import { FilesizePipe } from '../../pipes/filesize.pipe';
import { FilenamePipe } from '../../pipes/filename.pipe';
import { SkeletonModule } from 'primeng/skeleton';
import { ImageModule } from 'primeng/image';
import { DialogService } from 'primeng/dynamicdialog';
import { ModalImageComponent } from '../modal-image/modal-image.component';
import { ModalService } from '../../services/modals.service';
@Component({
  selector: 'app-image-container',
  standalone: true,
  imports: [
    NgIf,
    FilesizePipe,
    NgClass,
    FilenamePipe,
    SkeletonModule,
    ImageModule,
  ],
  templateUrl: './image-container.component.html',
  styleUrl: './image-container.component.scss',
})
export class ImageContainerComponent {
  @Input() image?: FileInfo;
  editImage(image: FileInfo) {}
  deleteImage(image: FileInfo) {}
  display = false;
  host = this.gService.BASE_URL;

  constructor(
    private gService: GlobalService,
    private mService: ModalService
  ) {}
  openModal() {
    if (this.image) this.mService.displayImage(this.image);
  }
}
