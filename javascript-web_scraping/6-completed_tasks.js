#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];
if (!apiUrl) process.exit(1);

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
    return;
  }

  const todos = JSON.parse(body);
  const result = {};

  todos.forEach(todo => {
    if (todo.completed) {
      if (!result[todo.userId]) {
        result[todo.userId] = 0;
      }
      result[todo.userId] += 1;
    }
  });

  console.log(result);
});
