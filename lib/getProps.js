"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequiredProps = getRequiredProps;
exports.getOptionalPropsArray = getOptionalPropsArray;
exports.getPropValue = getPropValue;

var _functionUtils = require("./utils/functionUtils");

function getRequiredProps(data) {
  let requriedString = '';

  for (let i = 0; i < data.length; i++) {
    if (data[i].required) {
      requriedString += `${data[i].name}: ${getPropValue(data[i])},\n`;
    }
  }

  return requriedString;
} // TODO: move generating this data to be similar to getRequiredProps so we can get rid of implementation inside template (template/template)


function getOptionalPropsArray(data) {
  return data.filter(d => !d.required);
}

function getPropValue(data) {
  const type = data.type;

  if ((0, _functionUtils.isFunction)(type)) {
    return 'jest.fn()';
  } // TODO: move all of this to separate functions like getStringType


  switch (type) {
    case 'string':
      return `'${getStringType(data.name)}'`;

    case 'number':
      return '123';

    case 'boolean':
      return 'true';

    case 'object':
      return '{}';

    case 'any':
      return '{}';

    default:
      return 'undefined';
  }
}

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
//# sourceMappingURL=getProps.js.map