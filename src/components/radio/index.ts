import { DireflowComponent } from 'direflow-component';

import Radio, { RadioProps } from './Radio';

DireflowComponent.create({
  component: Radio,
  configuration: {
    tagname: 'lp-radio',
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
      'lp-radio': RadioProps
    }
  }
}
