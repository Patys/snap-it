import path from 'path';
import ejs from 'ejs';
import fs from 'fs-extra';

import { TestPropsInfo } from './serializeSymbol';
import { getRequiredProps, getOptionalPropsArray, getPropValue } from './getProps';

const PATH = path.resolve(__dirname, '../fixtures');
const TEMPLATE = path.resolve(__dirname, '../template/template');

export async function generateTestFile(data: TestPropsInfo[], filename: string) {
  const dest = PATH;
  await fs.mkdirp(dest);

  const target = `${dest}/${filename}.test.tsx`;
  const content = await fs.readFile(TEMPLATE, 'utf8');

  await fs.writeFile(target, ejs.render(content, {
    data,
    getRequiredProps,
    getOptionalPropsArray,
    getPropValue,
    componentName: filename,
  }));
}
