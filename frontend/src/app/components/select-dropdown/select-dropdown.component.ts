import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectOption } from './selectOption';

@Component({
  selector: 'app-select-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './select-dropdown.component.html',
  styleUrl: './select-dropdown.component.scss',
})
export class SelectDropdownComponent {
  @Output() onSelect = new EventEmitter();
  @Input() options: SelectOption[] = [];
  @Input() selected = SelectOption;
  @Input() placeholder = '';
}
