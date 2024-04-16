import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UploadedFile } from '../../models/uploaded.file.model';
import { GlobalService } from '../../services/global.service';
import { Store } from '@ngrx/store';
import { UploadActions } from '../../store/actions/upload.actions';

@Component({
  selector: 'app-file-handling',
  standalone: true,
  imports: [NgFor, NgClass],
  templateUrl: './file-handling.component.html',
  styleUrl: './file-handling.component.scss',
  providers: [FileReader],
})
export class FileHandlingComponent {
  @Input() fileFormats: String = '';
  @Input() hasFiles: boolean = false;
  expand = false;
  invalidFile = false;
  files: UploadedFile[] = [];
  host = this.gService.BASE_URL;
  constructor(private gService: GlobalService, private store: Store) {}
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
