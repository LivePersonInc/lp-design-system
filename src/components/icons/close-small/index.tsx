import { DireflowComponent } from 'direflow-component';

import CloseSmallIcon, { CloseSmallIconProps } from './CloseSmallIcon';

DireflowComponent.create({
  component: CloseSmallIcon,
  configuration: {
    tagname: 'lp-close-small-icon',
  }
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-close-small-icon': CloseSmallIconProps
    }
  }
}
