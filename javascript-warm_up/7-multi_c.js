#!/usr/bin/node

const loopv = parseInt(process.argv[2]);
if (loopv) {
  for (let i = 1; i <= loopv; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}
