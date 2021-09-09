import { DireflowComponent } from 'direflow-component';

import InputHelper, { InputHelperProps } from './InputHelper';

DireflowComponent.create({
  component: InputHelper,
  configuration: {
    tagname: 'lp-input-helper',
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
      'lp-input-helper': InputHelperProps
    }
  }
}
