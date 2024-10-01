import { parse } from './parser';
import { runProgram } from './interpreter';
import * as fs from 'fs';
import * as path from 'path';
import { Command } from 'commander';

const program = new Command();

program
   .argument('<file>', 'The Basktt file to run')
   .action((file) => {
       const filePath = path.resolve(file);
       try {
           const baskttCode = fs.readFileSync(filePath, 'utf-8');
           console.log(`Executing file: ${filePath}`);
           const parsedCode = parse(baskttCode);
           runProgram(parsedCode);
       } catch (err) {
           console.error(`Error reading file: ${filePath}`);
           console.error(err.message);
       }
   });

program.parse(process.argv);
