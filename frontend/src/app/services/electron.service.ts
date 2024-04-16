import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ElectronService {
  electronInstance: any;
  setElectronInstance(instance: any) {
    this.electronInstance = instance;
  }
  sendMessage(message: String) {
    if (!!this.electronInstance) {
      console.log(message);
      this.electronInstance.ipcRenderer.invoke(message);
    }
  }
}
