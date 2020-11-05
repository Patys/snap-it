"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRequiredProps = getRequiredProps;
exports.getOptionalPropsArray = getOptionalPropsArray;
exports.getPropValue = getPropValue;

var _functionUtils = require("./utils/functionUtils");

var _getStringType = _interopRequireDefault(require("./types/getStringType"));

var _getNumberType = _interopRequireDefault(require("./types/getNumberType"));

var _getBooleanType = _interopRequireDefault(require("./types/getBooleanType"));

var _getObjectType = _interopRequireDefault(require("./types/getObjectType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      return `'${(0, _getStringType.default)(data.name)}'`;

    case 'number':
      return `'${(0, _getNumberType.default)()}'`;

    case 'boolean':
      return `'${(0, _getBooleanType.default)()}'`;

    case 'object':
      return `'${(0, _getObjectType.default)()}'`;

    case 'any':
      return `'${(0, _getObjectType.default)()}'`;

    default:
      return 'undefined';
  }
}
//# sourceMappingURL=getProps.js.map