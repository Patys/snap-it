"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFunction = isFunction;

function isFunction(type) {
  const brackets = /\((.*)\)/;
  console.log(type);
  console.log(brackets.test(type));
  return !!brackets.test(type);
}
//# sourceMappingURL=functionUtils.js.map