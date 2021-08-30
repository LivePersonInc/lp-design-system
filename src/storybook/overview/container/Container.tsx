import React from 'react';

import classes from './Container.module.scss';

const Header: React.FC = ({ children }) => (
  <div className={classes['wrap']}>
    {children}
  </div>
);

export default Header
