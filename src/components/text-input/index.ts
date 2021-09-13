import { DireflowComponent } from 'direflow-component';

import TextInput, { TextInputProps } from './TextInput';

DireflowComponent.create({
  component: TextInput,
  configuration: {
    tagname: 'lp-text-input',
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
}).then(element => {
  if (element.querySelector('[slot="icon-left"]')) {
    element.shadowRoot?.querySelector('input')?.classList.add('with-icon-left');
  }

  if (element.querySelector('[slot="icon-right"]')) {
    element.shadowRoot?.querySelector('input')?.classList.add('with-icon-right');
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-text-input': TextInputProps
    }
  }
}
