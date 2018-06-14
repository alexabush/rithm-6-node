const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;

app.set('view engine', 'pug');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res, next) {
  return res.render('index', {
    name: 'Elie',
    favNums: [1, 2, 3, 4]
  });
});

app.get('/todos', function(req, res, next) {
  res.render('index'), { todos };
});

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
