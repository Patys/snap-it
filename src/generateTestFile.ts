import path from 'path';
import ejs from 'ejs';
import fs from 'fs-extra';

import { TestPropsInfo } from './serializeSymbol';
import { getRequiredProps, getOptionalPropsArray, getPropValue } from './getProps';

const TEMPLATE = path.resolve(__dirname, '../template/template');

export async function generateTestFile(data: TestPropsInfo[], filename: string) {
  // TODO: add posibility to point place
  const dest = path.join(process.cwd(), '__tests__')
  await fs.mkdirp(dest);

  const target = `${dest}/${filename}.test.tsx`;
  const content = await fs.readFile(TEMPLATE, 'utf8');

  console.log(`Writing to ${target}`)
  await fs.writeFile(target, ejs.render(content, {
    data,
    getRequiredProps,
    getOptionalPropsArray,
    getPropValue,
    componentName: filename,
  }));
}
