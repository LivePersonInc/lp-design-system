import { DireflowComponent } from 'direflow-component';

import TextStatementIcon, { TextStatementIconProps } from './TextStatementIcon';

DireflowComponent.create({
  component: TextStatementIcon,
  configuration: {
    tagname: 'lp-text-statement-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-text-statement-icon': TextStatementIconProps
    }
  }
}
