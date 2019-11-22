import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild,
    AnimationQueryMetadata,
    AnimationMetadata
} from '@angular/animations';

const fix: AnimationMetadata[] = [
    query(':leave, :enter',
        style({ position: 'fixed', width: '100%' }),
        { optional: true })
];

const animate1: AnimationMetadata[] = [
    query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out',
            style({ transform: 'translateX(-100%)' }))
    ])
];

const animate2: AnimationMetadata[] = [
    query(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out',
            style({ transform: 'translateX(100%)' }))
    ], { optional: true }),
];

const animate3: AnimationMetadata[] = [
    query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
    ], { optional: true }),
    query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out',
            style({ transform: 'translateX(100%)' }))
    ], { optional: true }),
];

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('Home => *', [
            fix[0],
            group([
                animate1[0],
                animate1[1],
            ])
        ]),
        transition('Detail => Home', [
            fix[0],
            group([
                animate2[0],
                animate2[1],
            ])
        ]),
        transition('Canje => Home', [
            fix[0],
            group([
                animate2[0],
                animate2[1],
            ])
        ]),
        transition('Home => Detail', [
            fix[0],
            group([
                animate3[0],
                animate3[1],
            ])
        ]),
        transition('Home => Canje', [
            fix[0],
            group([
                animate3[0],
                animate3[1],
            ])
        ]),
        transition('Detail => Canje', [
            fix[0],
            group([
                animate2[0],
                animate2[1],
            ])
        ]),
        transition('Canje => Detail', [
            fix[0],
            group([
                animate1[0],
                animate1[1],
            ])
        ]),
    ]);
