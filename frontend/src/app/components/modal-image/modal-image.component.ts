import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { FileInfo } from '../../models/fileInfo';
import { GlobalService } from '../../services/global.service';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FilesizePipe } from '../../pipes/filesize.pipe';
import { Store } from '@ngrx/store';
import { ImageDeleteActions } from '../../store/actions/image.actions';

@Component({
  selector: 'app-modal-image',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, FilesizePipe],
  templateUrl: './modal-image.component.html',
  styleUrl: './modal-image.component.scss',
})
export class ModalImageComponent {
  image?: FileInfo;
  offspring?: FileInfo[] = [];
  deleteImage(id?: String) {
    if (!!id) {
      this.dRef.close();
      this.store.dispatch(ImageDeleteActions.attempt({ id }));
    }
  }
  constructor(
    private dRef: DynamicDialogRef,
    private dConfig: DynamicDialogConfig,
    private gService: GlobalService,
    private store: Store
  ) {
    this.image = this.dConfig.data?.image;
  }
  baseUrl = this.gService.BASE_URL;
}
