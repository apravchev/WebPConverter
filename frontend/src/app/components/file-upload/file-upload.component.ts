import { NgClass, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ImageHandlerService } from '../../services/image_handler.service';
import { first } from 'rxjs';

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
  files: File[] = [];
  constructor(private iService: ImageHandlerService) {}
  postFiles(res: Event | any) {
    console.log(res.files);
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
          this.files = filtered;
          console.log(this.files);
          this.iService.uploadFiles(this.files).pipe(first()).subscribe();
        }
      }
    }
  }
}
