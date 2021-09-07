import React, { useCallback, useMemo, useState } from 'react';
import { Source } from '@storybook/addon-docs';
import classNames from 'classnames';

import { Icons, icons } from './icons';

import { IconProps } from './Icon';

import './';

import classes from './IconsList.module.scss';

type IconsNames = {
  name: Icons
}

type IconPropsWithName = IconProps & IconsNames

const IconImportDetails: React.FC<IconPropsWithName> = ({ name, type, size, color }) => (
  <div className={classes['details']}>
    <h4 className={classes['details-name']}>
      {React.createElement(`lp-${name}-icon`, {
        class: classes['details-icon'],
        type,
        size: 'medium',
      })}
      {name}
    </h4>

    <Source language="javascript" code={`import 'liveperson-design-system/icons/${name}';`} />

    <Source language="html" code={`<lp-${name}-icon${type === 'solid' ? '' : ` type="${type}"`}${size === 'small' ? '' : ` size="${size}"`}${color === 'dark' ? '' : ` color="${color}"`} />`} />
  </div>
);

type IconsListItemProps = IconPropsWithName & {
  selected?: boolean
  onClick?(): void
}
const IconsListItem: React.FC<IconsListItemProps> = ({ name, selected, onClick, ...props }) => (
  <div className={classNames(classes['list-item'], { [classes['selected']]: selected })} onClick={onClick}>
    {React.createElement(`lp-${name}-icon`, { ...props, class: classes['icon'] })}

    <div className={classes['name']}>{name}</div>
  </div>
);

const IconsList: React.FC<IconPropsWithName> = ({ name, ...props }) => {
  const [selectedIcon, setSelectedIcon] = useState<Icons>();

  const filteredIcons = useMemo<Icons[]>(() => (
    name ? icons.filter(icon => icon.includes(name)) : icons
  ), [name]);

  const itemClickHandler = useCallback((icon?: Icons) => (): void => {
    setSelectedIcon(icon);
  }, []);

  return (
    <div className={classes['list']}>
      {filteredIcons.map(icon => (
        icon === selectedIcon
          ? (
            <React.Fragment key={icon}>
              <IconsListItem key={icon} name={icon} selected onClick={itemClickHandler()} {...props} />

              <IconImportDetails name={icon} {...props} />
            </React.Fragment>
          )
          : <IconsListItem key={icon} name={icon} onClick={itemClickHandler(icon)} {...props} />
      ))}
    </div>
  );
};

export default IconsList
