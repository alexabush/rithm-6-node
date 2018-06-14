/*
This file defines routes for the /dogs
endpoint(s)

Each endpoint is set up to handle 1+ different
kinds of http request

Each route relies on files in the 
../handlers folder to process the request

This file returns an object?
*/

const express = require('express');
const router = express.Router();

const { dogs } = require('../handlers');

router
  .route('')
  .get(dogs.readDogs)
  .post(dogs.createDog);

router
  .route('/:dogId')
  .get(dogs.readDog)
  .patch(dogs.updateDog)
  .delete(dogs.deleteDog);

module.exports = router;
