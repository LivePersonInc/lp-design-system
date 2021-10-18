export type ArrayOfKeys<T> = Array<keyof T>

export function getPropsKeysByDefaultProps<P extends Object = Object>(defaultProps: Partial<P> = {}, props: P): ArrayOfKeys<P> {
  return (Object.keys(defaultProps) as ArrayOfKeys<P>).filter(key => (defaultProps[key] !== props[key]));
}

export function getPropsByDefaultProps<P extends Object = Object>(defaultProps: Partial<P> = {}, props: P): Partial<P> {
  const newProps: Partial<P> = {};

  getPropsKeysByDefaultProps<P>(defaultProps, props).forEach(key => {
    newProps[key] = props[key];
  });

  return newProps;
}
