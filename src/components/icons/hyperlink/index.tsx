import { DireflowComponent } from 'direflow-component';

import HyperlinkIcon, { HyperlinkIconProps } from './HyperlinkIcon';

DireflowComponent.create({
  component: HyperlinkIcon,
  configuration: {
    tagname: 'lp-hyperlink-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-hyperlink-icon': HyperlinkIconProps
    }
  }
}
