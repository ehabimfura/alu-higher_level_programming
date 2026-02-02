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

  const wedgeId = 'https://swapi-api.alx-tools.com/api/people/18/';
  let count = 0;

  movies.forEach(movie => {
    if (movie.characters.includes(wedgeId)) {
      count += 1;
    }
  });

  console.log(count);
});
