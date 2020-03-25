export function isFunction(type) {
  const brackets = /\(([^)]+)\)/
  return !!brackets.test(type)
}
