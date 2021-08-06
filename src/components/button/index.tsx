import { DireflowComponent } from 'direflow-component';

import Button from './Button';

export default DireflowComponent.create({
  component: Button,
  configuration: {
    tagname: 'lp-button',
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
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-button': any
    }
  }
}
