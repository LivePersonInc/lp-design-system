import { DireflowComponent } from 'direflow-component';

import Textarea, { TextareaProps } from './Textarea';

DireflowComponent.create({
  component: Textarea,
  configuration: {
    tagname: 'lp-textarea',
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
}).then(element => {
  if (element.querySelector('[slot="icon-left"]')) {
    element.shadowRoot?.querySelector('textarea')?.classList.add('with-icon-left');
  }

  if (element.querySelector('[slot="icon-right"]')) {
    element.shadowRoot?.querySelector('textarea')?.classList.add('with-icon-right');
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-textarea': TextareaProps
    }
  }
}
