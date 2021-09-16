import { DireflowComponent } from 'direflow-component';

import Checkbox, { CheckboxProps } from './Checkbox';

DireflowComponent.create({
  component: Checkbox,
  configuration: {
    tagname: 'lp-checkbox',
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
      'lp-checkbox': CheckboxProps
    }
  }
}
