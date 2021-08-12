import { DireflowComponent } from 'direflow-component';

import Button, { ButtonProps } from './Button';

DireflowComponent.create({
  component: Button,
  configuration: {
    tagname: 'lp-button',
    useAnonymousSlot: true,
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Roboto'],
        },
      },
    },
  ],
}).then(element => {
  if (element.tagName === 'LP-BUTTON') {
    element.tabIndex = 0;
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-button': ButtonProps
    }
  }
}
