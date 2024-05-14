import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SelectDropdownComponent } from '../select-dropdown/select-dropdown.component';

@Component({
  selector: 'app-image-filter',
  standalone: true,
  imports: [ReactiveFormsModule, SelectDropdownComponent],
  templateUrl: './image-filter.component.html',
  styleUrl: './image-filter.component.scss',
})
export class ImageFilterComponent {
  @Output() onFormChange = new EventEmitter();
  filterForm = this.fBuilder.group({
    query: [''],
    format: [''],
    date: [
      {
        from: new Date(),
        to: new Date(),
      },
    ],
    size: [0],
  });
  constructor(private fBuilder: FormBuilder) {}
}
