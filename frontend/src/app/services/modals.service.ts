import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { FileInfo } from '../models/fileInfo';
import { ModalImageComponent } from '../components/modal-image/modal-image.component';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private dService: DialogService) {}

  closeAll() {
    this.dService.dialogComponentRefMap.forEach((item) => item.destroy());
  }
  displayImage(image: FileInfo) {
    this.dService.open(ModalImageComponent, {
      width: '100%',
      height: '100%',
      focusTrap: true,
      showHeader: false,

      data: {
        image,
      },
    });
  }
}
