const express = require('express');

const app = express();
const PORT = 3000;

app.get('/hello/:person', function(request, response, next) {
  console.log(request.params);
  console.log(request.query);
  return response.send(`Hello ${request.params.person}`);
});

app.get('/number/:x', function(request, response, next) {
  return response.send(typeof request.params.x);
});

app.listen(PORT, function() {
  console.log(`app is listening on ${PORT}`);
});
