const express = require('express');
const app = express();
const PORT = 3000;
const text = 'I <3 Javascript';

app.use((request, response, next) => {
  request.phrase = text.split(' ')[0];
  return next();
});

app.use((request, response, next) => {
  request.phrase += ` ${text.split(' ')[1]}`;
  return next();
});

app.use((request, response, next) => {
  request.phrase += ` ${text.split(' ')[2]}`;
  return next();
});

app.get('/phrase', (request, response, next) => {
  return response.send(request.phrase);
});

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
