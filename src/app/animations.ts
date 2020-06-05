import { trigger, transition, state, style, animate } from "@angular/animations";

export const todoAnimation =
    trigger('slide', [
        state('void', style({
                transform: 'scale(0)',
                opacity: 0
            }
        )),
        transition(':enter', [
            animate(500, style({
                    transform: 'scale(1)',
                    opacity: 1
                }
            ))
        ]),
        transition(':leave', [
            animate(500, style({
                    transform: 'scale(0)',
                    opacity: 0
                }
            ))
        ])
    ])