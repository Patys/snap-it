"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTestFile = generateTestFile;

var _path = _interopRequireDefault(require("path"));

var _ejs = _interopRequireDefault(require("ejs"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _getProps = require("./getProps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PATH = _path.default.resolve(__dirname, '../fixtures');

const TEMPLATE = _path.default.resolve(__dirname, '../template/template');

async function generateTestFile(data, filename) {
  const dest = PATH;
  await _fsExtra.default.mkdirp(dest);
  const target = `${dest}/${filename}.test.tsx`;
  const content = await _fsExtra.default.readFile(TEMPLATE, 'utf8');
  await _fsExtra.default.writeFile(target, _ejs.default.render(content, {
    data,
    getRequiredProps: _getProps.getRequiredProps,
    getOptionalPropsArray: _getProps.getOptionalPropsArray,
    getPropValue: _getProps.getPropValue,
    componentName: filename
  }));
}
//# sourceMappingURL=generateTestFile.js.map