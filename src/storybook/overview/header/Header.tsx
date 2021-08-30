import React from 'react';

import Content from './Content.mdx';

import classes from './Header.module.scss';

const Header = () => (
  <div className={classes['wrap']}>
    <img className={classes['logo']} src="lpds-logo.svg" alt="LPDS" />

    <div>
      <Content />
    </div>
  </div>
);

export default Header
