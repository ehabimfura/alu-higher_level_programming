#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

if (!url) {
  process.exit(1); // exit silently if no URL is provided
}

request.get(url, response => {
  console.log(`code: ${response.statusCode}`);
});
