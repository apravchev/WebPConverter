import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss',
})
export class LoadingSpinnerComponent {}
