const express = require('express');
const app = express();
const PORT = 3001;

function doMath(op, a, b) {
  const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };
  return operations[op](a, b);
}

app.get('/:operation/:num1/:num2', function(request, response, next) {
  const nums = request.query.nums
    .split(',')
    .reduce((a, b) => doMath(request.params.operation, a, b));

  const operation = request.params.operation;
  const num1 = +request.params.num1;
  const num2 = +request.params.num2;
  const errorMessage = 'Sorry it didn\'t work out, better luck next time';
  const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
  };

  if (isNaN(num1) || isNaN(num2) || !operations.hasOwnProperty(operation)) {
    return response.send(errorMessage);
  }

  const result = operations[operation](num1, num2);
  return response.send(`${result}`);
  // BONUS => make this work for INFINITE things using query string instead of route params
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});

// btw if you’re done this assignment, then add error handling!
// What happens if I do `/add/5/foo` ?
// What happens if I do `/divide/3/0` ?

// What happens if I pass an invalid operation?
