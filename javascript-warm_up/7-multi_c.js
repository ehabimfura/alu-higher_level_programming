#!/usr/bin/node

const occurances = parseInt(process.argv[2]);

if (occurances) {
  for (let i in occurances) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
