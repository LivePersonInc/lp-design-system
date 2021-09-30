import React from 'react';

export type StyledCustomProps = {
  styles: string | string[]
}

export type StyledProps = StyledCustomProps & JSX.IntrinsicElements['style']

export type StyledComponent = React.FC<StyledProps>

const Styled: StyledComponent = ({ styles, children, ...props }) => (
  <>
    <style {...props}>
      {Array.isArray(styles) ? styles.join() : styles}
    </style>

    {children}
  </>
);

export default Styled
