"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getStringType(name) {
  // TODO: move checking color to separate function and make it maybe regex?
  switch (name) {
    case 'color':
    case 'backgroundColor':
    case 'bgColor':
      return '#ffffff';

    default:
      return 'testing string';
  }
}

var _default = getStringType;
exports.default = _default;
//# sourceMappingURL=getStringType.js.map