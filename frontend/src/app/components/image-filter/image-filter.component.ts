import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';

import { FileFilter } from '../../models/fileFilter';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-image-filter',
  standalone: true,
  imports: [
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ReactiveFormsModule,
    DropdownModule,
  ],
  templateUrl: './image-filter.component.html',
  styleUrl: './image-filter.component.scss',
})
export class ImageFilterComponent {
  @Output() onFilterChange = new EventEmitter<FileFilter>();
  filterForm = this.fBuilder.nonNullable.group({
    search: [''],
    format: [undefined],
    date: [
      {
        from: undefined,
        to: undefined,
      },
    ],
  });
  constructor(private fBuilder: FormBuilder) {}
  submitForm() {
    this.onFilterChange.emit(this.filterForm.value);
  }
}
