import path from 'path';
import ejs from 'ejs';
import fs from 'fs-extra';

import { info, success } from './utils/logger';
import { TestPropsInfo } from './serializeSymbol';
import {
  getRequiredProps,
  getOptionalPropsArray,
  getPropValue,
} from './getProps';

const TEMPLATE = path.resolve(__dirname, '../template/template');

export async function generateTestFile(
  data: TestPropsInfo[],
  filename: string,
  filepath: string,
  options: { saveToSameFolder: boolean }
) {
  const root = process.cwd();

  let dest = path.relative(root, '__tests__');
  if (options.saveToSameFolder) {
    console.log(filepath);
    dest = path.relative(root, filepath.match(/(.*)[\/\\]/)[1] || '');
  }
  const filepathRelative = options.saveToSameFolder
    ? `./${path.relative(dest, filepath)}`
    : path.relative(dest, filepath);
  await fs.mkdirp(dest);

  const target = `${dest}/${filename}.test.tsx`;
  const content = await fs.readFile(TEMPLATE, 'utf8');

  info(`Writing to ${target}`);
  await fs.writeFile(
    target,
    ejs.render(content, {
      data,
      getRequiredProps,
      getOptionalPropsArray,
      getPropValue,
      componentName: filename,
      filepath: filepathRelative,
    })
  );
  success(`Done, check your test in ${target}`);
}
