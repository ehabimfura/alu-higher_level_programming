#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const content = process.argv.slice(3).join(' ');

if (!filePath || !content) {
  console.error('Please provide both a file path and a string to write.');
  process.exit(1);
}

// Write the string to the file in UTF-8
fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
