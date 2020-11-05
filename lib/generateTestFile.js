"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateTestFile = generateTestFile;

var _path = _interopRequireDefault(require("path"));

var _ejs = _interopRequireDefault(require("ejs"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _logger = require("./utils/logger");

var _getProps = require("./getProps");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TEMPLATE = _path.default.resolve(__dirname, '../template/template');

async function generateTestFile(data, filename, filepath, options) {
  const root = process.cwd();

  let dest = _path.default.relative(root, '__tests__');

  if (options.saveToSameFolder) {
    console.log(filepath);
    dest = _path.default.relative(root, filepath.match(/(.*)[\/\\]/)[1] || '');
  }

  const filepathRelative = options.saveToSameFolder ? `./${_path.default.relative(dest, filepath)}` : _path.default.relative(dest, filepath);
  await _fsExtra.default.mkdirp(dest);
  const target = `${dest}/${filename}.test.tsx`;
  const content = await _fsExtra.default.readFile(TEMPLATE, 'utf8');
  (0, _logger.info)(`Writing to ${target}`);
  await _fsExtra.default.writeFile(target, _ejs.default.render(content, {
    data,
    getRequiredProps: _getProps.getRequiredProps,
    getOptionalPropsArray: _getProps.getOptionalPropsArray,
    getPropValue: _getProps.getPropValue,
    componentName: filename,
    filepath: filepathRelative
  }));
  (0, _logger.success)(`Done, check your test in ${target}`);
}
//# sourceMappingURL=generateTestFile.js.map