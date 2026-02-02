#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
if (!apiUrl) process.exit(1);

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const data = JSON.parse(body);
  const movies = data.results;

  let count = 0;
  const wedgeId = '/18/'; // check for this at the end of character URL

  movies.forEach(movie => {
    const found = movie.characters.some(charUrl => charUrl.endsWith(wedgeId));
    if (found) count += 1;
  });

  console.log(count);
});
