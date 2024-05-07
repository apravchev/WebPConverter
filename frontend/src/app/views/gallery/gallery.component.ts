import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ImagesGridComponent } from '../../components/images-grid/images-grid.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImagesGridComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit {
  constructor(private store: Store) {}
  ngOnInit(): void {}
}
