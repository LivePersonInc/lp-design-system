import { DireflowComponent } from 'direflow-component';

import HistoryIcon, { HistoryIconProps } from './HistoryIcon';

DireflowComponent.create({
  component: HistoryIcon,
  configuration: {
    tagname: 'lp-history-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-history-icon': HistoryIconProps
    }
  }
}
