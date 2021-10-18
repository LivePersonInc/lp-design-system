import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

import { ToggleProps } from './Toggle';

const Controlled: React.FC<ToggleProps> = ({ ...props }) => {
  const toggleRef = useRef<HTMLInputElement>(null);

  const [checked, setChecked] = useState(false);

  const toggleChangeHandler = useCallback((e): void => {
    setChecked(e.detail.checked);
  }, []);

  useLayoutEffect(() => {
    toggleRef.current?.addEventListener('change', toggleChangeHandler);
  }, [toggleChangeHandler]);

  return <lp-toggle {...props} ref={toggleRef} checked={checked} />;
};

export default Controlled
