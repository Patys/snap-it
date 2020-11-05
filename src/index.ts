import path from 'path';
import * as ts from 'typescript';
import yargs from 'yargs';

import { info, error } from './utils/logger';
import { serializeSymbol, TestPropsInfo } from './serializeSymbol';
import { generateTestFile } from './generateTestFile';

yargs.command('g <name>', 'create a snapshot for component', {}, snapshot).argv;

async function snapshot(argv: yargs.Arguments<any>) {
  const saveToSameFolder = argv.direct === 'true';

  const root = process.cwd();
  const fileName = path.relative(root, argv.name);
  info(`Reading: ${fileName}`);

  const testNameRegex = /[^\/]+(?=\.)/g;
  const testName = fileName.match(testNameRegex)[0];

  const program = ts.createProgram([fileName], {});
  const checker = program.getTypeChecker();
  const source = program.getSourceFile(fileName);

  if (!source) {
    error('Typescript source file is required');
    return;
  }

  ts.forEachChild(source, (node) => {
    // TODO: get also function and class, extract data from there like e.g. default values
    if (ts.isInterfaceDeclaration(node)) {
      const symbol = checker.getSymbolAtLocation(node.name);
      const data = [] as TestPropsInfo[];
      symbol.members.forEach((loc) => {
        const info = serializeSymbol(loc, checker);
        data.push(info);
      });
      generateTestFile(data, testName, fileName, { saveToSameFolder });
    }
  });
}
