#!/usr/bin/env node
import process from 'node:process'; // <--- ADD THIS LINE
import { LaoNumSpeller } from './index.js';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: ts-laonumspeller <number>");
  process.exit(1);
}

try {
  // Use ! to tell TS the argument is not undefined
  const result = LaoNumSpeller.numberToWords(args[0]!);
  console.log(result);
} catch (err) {
  if (err instanceof Error) {
    console.error("Error:", err.message);
  }
}