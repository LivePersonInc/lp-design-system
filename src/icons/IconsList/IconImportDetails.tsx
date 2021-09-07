import React from 'react';
import { Source } from '@storybook/addon-docs';

import { IconsListProps } from './IconsList';

import classes from './IconsList.module.scss';

export type IconImportDetailsProps = IconsListProps

export type IconImportDetailsComponent = React.FC<IconImportDetailsProps>

const IconImportDetails: IconImportDetailsComponent = ({ name, type, size, color }) => (
  <div className={classes['details']}>
    <h4 className={classes['details-name']}>
      {React.createElement(`lp-${name}-icon`, {
        class: classes['details-icon'],
        type,
        size: 'medium',
      })}
      {name}
    </h4>

    <Source language="html" code={`<script src="https://unpkg.com/liveperson-design-system/icons/${name}.js"></script>`} />

    <Source language="javascript" code={`import 'liveperson-design-system/icons/${name}';`} />

    <Source language="html" code={`<lp-${name}-icon${type === 'solid' ? '' : ` type="${type}"`}${size === 'small' ? '' : ` size="${size}"`}${color === 'dark' ? '' : ` color="${color}"`} />`} />
  </div>
);

export default IconImportDetails
