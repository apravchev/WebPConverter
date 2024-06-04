import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileInfo } from '../../models/fileInfo';

@Component({
  selector: 'app-modal-image',
  standalone: true,
  imports: [],
  templateUrl: './modal-image.component.html',
  styleUrl: './modal-image.component.scss',
})
export class ModalImageComponent {
  image?: FileInfo;
  constructor(
    private dRef: DynamicDialogRef,
    private dConfig: DynamicDialogConfig
  ) {
    this.image = this.dConfig.data?.image;
  }
}
