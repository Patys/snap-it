import path from 'path';
import * as ts from 'typescript'
import yargs from 'yargs';

import { serializeSymbol, TestPropsInfo } from './serializeSymbol';
import { generateTestFile } from './generateTestFile';

yargs
  .command('g <name>', 'create a snapshot for component', {}, snapshot)
  .argv;

async function snapshot(argv: yargs.Arguments<any>) {
  const fileName = path.join(process.cwd(), argv.name);
  const testNameRegex = /[^\/]+(?=\.)/g
  const testName = fileName.match(testNameRegex)[0]

  const program = ts.createProgram([fileName], {})
  const checker = program.getTypeChecker()
  const source = program.getSourceFile(fileName)

  if (source) {
    ts.forEachChild(source, (node) => {
      if (ts.isInterfaceDeclaration(node)){
        const name = node.name.text
        console.log(name)
        // @ts-ignore
        const symbol = checker.getSymbolAtLocation(node.name)
        const data = [] as TestPropsInfo[]
        symbol.members.forEach((loc) => {
          const info = serializeSymbol(loc, checker)
          console.log(info)
          data.push(info)
        })
        generateTestFile(data, testName)
      }
    });
  }
}
