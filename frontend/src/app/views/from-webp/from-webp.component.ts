import { Component } from '@angular/core';
import { FileUploadComponent } from '../../components/file-upload/file-upload.component';

@Component({
  selector: 'app-from-webp',
  standalone: true,
  imports: [FileUploadComponent],
  templateUrl: './from-webp.component.html',
  styleUrl: './from-webp.component.scss',
})
export class FromWebpComponent {}
