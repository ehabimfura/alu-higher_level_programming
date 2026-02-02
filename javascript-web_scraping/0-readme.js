#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

if (!filePath) {
    console.error("Please provide a file path as the first argument.");
    process.exit(1);
}

// Read the file in UTF-8 encoding
fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        // Print the error object if an error occurs
        console.error(err);
    } else {
        // Print the content of the file
        console.log(data);
    }
});

