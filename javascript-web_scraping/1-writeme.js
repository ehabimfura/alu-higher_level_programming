#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const content = process.argv.slice(3).join(' ');

// Attempt to write the file in UTF-8
fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
