export function objectFilter(object, predicate) {
  const newObject = {};

  Object.keys(object).filter(key => predicate(object[key], key)).forEach(key => {
    newObject[key] = object[key];
  });

  return newObject;
}
