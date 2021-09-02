import { DireflowComponent } from 'direflow-component';

import HyperlinkHorizIcon, { HyperlinkHorizIconProps } from './HyperlinkHorizIcon';

DireflowComponent.create({
  component: HyperlinkHorizIcon,
  configuration: {
    tagname: 'lp-hyperlink-horiz-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-hyperlink-horiz-icon': HyperlinkHorizIconProps
    }
  }
}
