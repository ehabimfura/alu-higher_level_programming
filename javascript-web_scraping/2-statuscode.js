#!/usr/bin/node

const request = require('request');

const url = process.argv[2];

if (!url) {
  process.exit(1); // exit silently if no URL is provided
}

request.get(url, (error, response) => {
  if (error) {
    console.error(error);
    return;
  }
  console.log(`code: ${response.statusCode}`);
});
