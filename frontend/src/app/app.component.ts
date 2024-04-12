import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './animations/route-transition';
import { ImageHandlerService } from './services/image_handler.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  providers: [ImageHandlerService],
  animations: [routeTransitionAnimations],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet.activatedRouteData['animationState'];
  }
  title = 'WebpConverter';
}
