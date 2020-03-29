"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.success = exports.error = exports.warn = exports.info = void 0;

var _chalk = _interopRequireDefault(require("chalk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = (type, color) => (...messages) => {
  console.log(_chalk.default.bgGray(_chalk.default.white(type)), color(...messages));
};

const info = logger('ℹ', _chalk.default.white);
exports.info = info;
const warn = logger('⚠', _chalk.default.yellow);
exports.warn = warn;
const error = logger('✖', _chalk.default.red);
exports.error = error;
const success = logger('✓', _chalk.default.green);
exports.success = success;
//# sourceMappingURL=logger.js.map