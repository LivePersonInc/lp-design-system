export function objectFilter(object, predicate) {
  const newObject = {};

  Object.keys(object).filter(key => predicate(object[key], key)).forEach(key => {
    newObject[key] = object[key];
  });

  return newObject;
}

export function getPropsKeysByDefaultProps(defaultProps = {}, props) {
  return Object.keys(defaultProps).filter(key => (defaultProps[key] !== props[key]));
}

export function getPropsByDefaultProps(defaultProps = {}, props) {
  const newProps = {};

  getPropsKeysByDefaultProps(defaultProps, props).forEach(key => {
    newProps[key] = props[key];
  });

  return newProps;
}

export function hideControls(controls) {
  const argTypes = {};

  controls.forEach(control => {
    argTypes[control] = { table: { disable: true } };
  });

  return argTypes;
}
