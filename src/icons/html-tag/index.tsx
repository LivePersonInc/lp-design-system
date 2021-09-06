import { DireflowComponent } from 'direflow-component';

import HtmlTagIcon, { HtmlTagIconProps } from './HtmlTagIcon';

DireflowComponent.create({
  component: HtmlTagIcon,
  configuration: {
    tagname: 'lp-html-tag-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-html-tag-icon': HtmlTagIconProps
    }
  }
}
