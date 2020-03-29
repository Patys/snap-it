import chalk from 'chalk';

const logger = (type: string, color: Function) => (...messages: unknown[]) => {
  console.log(chalk.bgGray(chalk.white(type)), color(...messages));
};

export const info = logger('ℹ', chalk.white);
export const warn = logger('⚠', chalk.yellow);
export const error = logger('✖', chalk.red);
export const success = logger('✓', chalk.green);
