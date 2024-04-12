import { Component } from '@angular/core';
import { FileUploadComponent } from '../../components/file-upload/file-upload.component';

@Component({
  selector: 'app-img-to-webp',
  standalone: true,
  imports: [FileUploadComponent],
  templateUrl: './img-to-webp.component.html',
  styleUrl: './img-to-webp.component.scss',
})
export class ImgToWebpComponent {}
