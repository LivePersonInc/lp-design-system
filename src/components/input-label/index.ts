import { DireflowComponent } from 'direflow-component';

import InputLabel, { InputLabelProps } from './InputLabel';

DireflowComponent.create({
  component: InputLabel,
  configuration: {
    tagname: 'lp-input-label',
    useAnonymousSlot: true,
  },
  plugins: [
    {
      name: 'font-loader',
      options: {
        google: {
          families: ['Roboto:400'],
        },
      },
    },
  ],
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-input-label': InputLabelProps
    }
  }
}
