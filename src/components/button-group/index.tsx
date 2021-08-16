import { DireflowComponent } from 'direflow-component';

import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';

DireflowComponent.create({
  component: ButtonGroup,
  configuration: {
    tagname: 'lp-button-group',
    useAnonymousSlot: true,
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Roboto:700'],
        },
      },
    },
  ],
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-button-group': ButtonGroupProps
    }
  }
}
