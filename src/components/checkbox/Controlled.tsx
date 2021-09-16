import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';

import { CheckboxProps } from './Checkbox';

const Controlled: React.FC<CheckboxProps> = ({ ...props }) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const [checked, setChecked] = useState(false);

  const checkboxChangeHandler = useCallback((e): void => {
    setChecked(e.detail.checked);
  }, []);

  useLayoutEffect(() => {
    checkboxRef.current?.addEventListener('change', checkboxChangeHandler);

    return () => {
      checkboxRef.current?.removeEventListener('change', checkboxChangeHandler);
    };
  }, [checkboxChangeHandler]);

  return <lp-checkbox {...props} ref={checkboxRef} checked={checked} />;
};

export default Controlled
