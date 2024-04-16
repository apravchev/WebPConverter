import { Component } from '@angular/core';
import { FileHandlingComponent } from '../../components/file-handling/file-handling.component';

@Component({
  selector: 'app-from-webp',
  standalone: true,
  imports: [FileHandlingComponent],
  templateUrl: './from-webp.component.html',
  styleUrl: './from-webp.component.scss',
})
export class FromWebpComponent {}
