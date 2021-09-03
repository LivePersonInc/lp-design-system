import { DireflowComponent } from 'direflow-component';

import ToggleButton, { ToggleButtonProps } from './ToggleButton';

DireflowComponent.create({
  component: ToggleButton,
  configuration: {
    tagname: 'lp-toggle-button',
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
}).then(element => {
  if (element.tagName === 'LP-TOGGLE-BUTTON') {
    element.tabIndex = 0;
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-toggle-button': ToggleButtonProps
    }
  }
}
