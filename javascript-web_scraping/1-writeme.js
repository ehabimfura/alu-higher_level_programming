#!/usr/bin/node

// Import the 'fs' module to work with the file system
const fs = require('fs');

// Get the file path from the command line arguments
const filePath = process.argv[2];
const stringtext = process.argv[3];
if (!filePath) {
  console.error('Please provide a file path as the first argument.');
  process.exit(1);
}

// Read the file in UTF-8 encoding
fs.writeFile(filePath, stringtext, 'utf-8', (err, data) => {
  if (err) {
    // Print the error object if an error occurs
    console.error(err);
    return;
  }

  // Print the content of the file
  console.log('File written Successfully');
});
