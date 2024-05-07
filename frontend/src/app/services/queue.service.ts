import { Injectable } from '@angular/core';
import { FormArray } from '@angular/forms';
import { Observable, queueScheduler } from 'rxjs';

@Injectable({ providedIn: 'root' })
/**
 * Used for the loading indicator, this service
 * will trigger the loading spinner on the
 * router element, containing the main app.
 */
export class QueueService {
  queue$: Observable<boolean> = new Observable<true>();
  private queue: Observable<any>[] = [];
  constructor() {}
  checkQueue() {}
  addToQueue(obs$: Observable<boolean>) {
    this.queue.push(obs$);
    this.checkQueue();
  }
}
