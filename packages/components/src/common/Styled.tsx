import React from 'react';

export type StyledCustomProps = {
  styles: string | string[]
  wrapElement?: keyof JSX.IntrinsicElements
}

export type StyledProps = StyledCustomProps & JSX.IntrinsicElements['style']

export type StyledComponent = React.FC<StyledProps>

const Styled: StyledComponent = ({ styles, wrapElement: WrapElement = React.Fragment, children, ...props }) => (
  <WrapElement>
    <style {...props}>
      {Array.isArray(styles) ? styles.join() : styles}
    </style>

    {children}
  </WrapElement>
);

export default Styled
