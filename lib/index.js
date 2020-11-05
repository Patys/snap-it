"use strict";

var _path = _interopRequireDefault(require("path"));

var ts = _interopRequireWildcard(require("typescript"));

var _yargs = _interopRequireDefault(require("yargs"));

var _logger = require("./utils/logger");

var _serializeSymbol = require("./serializeSymbol");

var _generateTestFile = require("./generateTestFile");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_yargs.default.command('g <name>', 'create a snapshot for component', {}, snapshot).argv;

async function snapshot(argv) {
  const saveToSameFolder = argv.direct === 'true';
  const root = process.cwd();

  const fileName = _path.default.relative(root, argv.name);

  (0, _logger.info)(`Reading: ${fileName}`);
  const testNameRegex = /[^\/]+(?=\.)/g;
  const testName = fileName.match(testNameRegex)[0];
  const program = ts.createProgram([fileName], {});
  const checker = program.getTypeChecker();
  const source = program.getSourceFile(fileName);

  if (!source) {
    (0, _logger.error)('Typescript source file is required');
    return;
  }

  ts.forEachChild(source, node => {
    // TODO: get also function and class, extract data from there like e.g. default values
    if (ts.isInterfaceDeclaration(node)) {
      const symbol = checker.getSymbolAtLocation(node.name);
      const data = [];
      symbol.members.forEach(loc => {
        const info = (0, _serializeSymbol.serializeSymbol)(loc, checker);
        data.push(info);
      });
      (0, _generateTestFile.generateTestFile)(data, testName, fileName, {
        saveToSameFolder
      });
    }
  });
}
//# sourceMappingURL=index.js.map