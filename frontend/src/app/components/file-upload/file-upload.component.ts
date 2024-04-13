import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageHandlerService } from '../../services/image_handler.service';
import { first } from 'rxjs';
import { ApiResponse } from '../../models/api.response.model';
import { UploadedFile } from '../../models/uploaded.file.model';
import { GlobalService } from '../../services/global.service';
import { Store } from '@ngrx/store';
import { UploadActions } from '../../store/actions/upload.actions';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
  providers: [FileReader],
})
export class FileUploadComponent {
  @Input() fileFormats: String = '';
  expand = false;
  invalidFile = false;
  files: UploadedFile[] = [];
  host = this.gService.BASE_URL;
  constructor(
    private iService: ImageHandlerService,
    private gService: GlobalService,
    private store: Store
  ) {}
  postFiles(res: Event | any) {
    if (!!res.target.files) {
      if (res.target.files.length > 0) {
        const uploaded: FileList = res.target.files || [];
        const allowed = this.fileFormats.split(',');
        const filtered = Array.from(uploaded).filter((a) =>
          allowed.includes(a.type)
        );
        if (filtered.length <= 0) {
          this.invalidFile = true;
        } else {
          this.store.dispatch(UploadActions.attempt({ files: filtered }));
        }
      }
    }
  }
}
