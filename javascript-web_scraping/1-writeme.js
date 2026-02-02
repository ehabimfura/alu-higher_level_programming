#!/usr/bin/node

// Import the 'fs' module
const fs = require('fs');

// Get the file path
const filePath = process.argv[2];

// Join all arguments after the file path as the content
const content = process.argv.slice(3).join(' ');

if (!filePath || !content) {
  console.error('Please provide both a file path and a string to write.');
  process.exit(1);
}

// Write the string to the file in UTF-8
fs.writeFile(filePath, content, 'utf-8', (err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('File written successfully.');
});
