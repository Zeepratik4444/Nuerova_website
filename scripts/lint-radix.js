import { promises as fs } from 'fs';
import { join } from 'path';
import { globby } from 'globby';
import { execa } from 'execa';

async function lintRadix() {
  const files = await globby(['src/**/*.tsx', 'src/**/*.ts'], {
    cwd: process.cwd(),
    absolute: true,
  });

  const filesToLint = [];
  for (const file of files) {
    const content = await fs.readFile(file, 'utf-8');
    if (content.includes('<SelectItem')) {
      filesToLint.push(file);
    }
  }

  if (filesToLint.length > 0) {
    console.log(`Linting ${filesToLint.length} files with Radix rules...`);
    try {
      await execa('npx', ['eslint', ...filesToLint, '--config', 'config/eslint/eslint.radix.config.js', '--fix'], {
        stdio: 'inherit',
        cwd: process.cwd(),
      });
      console.log('Radix linting completed.');
    } catch (error) {
      console.error('Radix linting failed:', error.message);
      process.exit(1);
    }
  } else {
    console.log('No files found containing <SelectItem>. Radix linting skipped.');
  }
}

lintRadix().catch(console.error);
