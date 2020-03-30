export function isFunction(type: string) {
  const brackets = /\((.*)\)/;
  return !!brackets.test(type);
}
