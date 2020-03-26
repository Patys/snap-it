import path from 'path';
import * as ts from 'typescript'
import yargs from 'yargs';

import { serializeSymbol, TestPropsInfo } from './serializeSymbol';
import { generateTestFile } from './generateTestFile';

yargs
  .command('g <name>', 'create a snapshot for component', {}, snapshot)
  .argv;

async function snapshot(argv: yargs.Arguments<any>) {
  const root = process.cwd()
  const fileName = path.relative(root, argv.name)
  console.log(`Reading: ${fileName}`)

  const testNameRegex = /[^\/]+(?=\.)/g
  const testName = fileName.match(testNameRegex)[0]

  const program = ts.createProgram([fileName], {})
  const checker = program.getTypeChecker()
  const source = program.getSourceFile(fileName)

  if (!source) {
    // TODO: move to chalk js lib to provide better error messages
    throw new Error('Typescript source file is required')
  }

  ts.forEachChild(source, (node) => {
    if (ts.isInterfaceDeclaration(node)){
      // @ts-ignore
      const symbol = checker.getSymbolAtLocation(node.name)
      const data = [] as TestPropsInfo[]
      symbol.members.forEach((loc) => {
        const info = serializeSymbol(loc, checker)
        data.push(info)
      })
      generateTestFile(data, testName, fileName)
    }
  });
}
