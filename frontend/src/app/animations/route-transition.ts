import {
  trigger,
  transition,
  style,
  query,
  animate,
  animateChild,
  group,
} from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
  transition('1 => 2, 2 => 3, 3 => 2 , 2 => 1', [
    style({ position: 'relative' }),
    query(':enter', [
      style({
        opacity: 0,
        translate: '-150px',
        position: 'absolute',
      }),
    ]),
    query(':enter', [style({ opacity: 0, translate: '0px' })]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate(
          '0.5s ease-out',
          style({ opacity: 0, translate: '120px', scale: 0.5 })
        ),
      ]),
      query(':enter', [
        animate(
          '0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          style({ opacity: 1, scale: 1 })
        ),
      ]),
    ]),
    query(':enter', animateChild()),
  ]),
]);
