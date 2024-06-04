import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { routeTransitionAnimations } from './animations/route-transition';
import { ImageHandlerService } from './services/imageHandler.service';
import { ElectronService } from './services/electron.service';
import { ModalService } from './services/modals.service';

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
  minimise() {
    this.eService?.sendMessage('minimise');
  }
  close() {
    this.eService?.sendMessage('close');
  }
  constructor(private eService: ElectronService) {
    var userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.indexOf('electron/') > -1) {
      this.eService.setElectronInstance(require('electron'));
    }
  }

  logEvent(ev: any) {
    console.log(ev);
  }
}
