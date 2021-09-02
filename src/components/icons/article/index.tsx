import { DireflowComponent } from 'direflow-component';

import ArticleIcon, { ArticleIconProps } from './ArticleIcon';

DireflowComponent.create({
  component: ArticleIcon,
  configuration: {
    tagname: 'lp-article-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-article-icon': ArticleIconProps
    }
  }
}
