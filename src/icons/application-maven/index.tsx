import { DireflowComponent } from 'direflow-component';

import ApplicationMavenIcon, { ApplicationMavenIconProps } from './ApplicationMavenIcon';

DireflowComponent.create({
  component: ApplicationMavenIcon,
  configuration: {
    tagname: 'lp-application-maven-icon',
  },
});

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lp-application-maven-icon': ApplicationMavenIconProps
    }
  }
}
