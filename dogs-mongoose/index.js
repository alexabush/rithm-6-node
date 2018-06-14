const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const { dogsRouter } = require('./routers');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
//specifies that the response be in json by default
app.use(bodyParser.json({ type: '*/*' }));

mongoose.Promise = Promise;
mongoose.set('debug', true);

mongoose
  .connect('mongodb://localhost/dogs')
  .then(() => {
    console.log('successful connection to mongodb');
  })
  .catch(err => {
    console.log(err);
  });

const PORT = 7777;

app.use('/dogs', dogsRouter);

app.listen(PORT, () => {
  console.log('Dogs' + PORT);
});
