const { Dog } = require('../models');

function createDog(req, res, next) {
  const newDog = new Dog(req.body);
  newDog.save().then(dog => {
    return res.status(201).json(dog);
  });
}

function readDogs(req, res, next) {
  return Dog.find().then(dogs => {
    return res.json('got /dogs');
  });
}

function readDog(req, res, next) {
  return Dog.findById(req.params.dogId)
    .then(dog => {
      if (!dog) {
        return res
          .status(404)
          .json({ message: `Dog ${req.params.dogId} not found` });
      }
      return res.json('got /dogs');
    })
    .catch(err => res.json(err));
}

function updateDog(req, res, next) {
  return Dog.findByIdAndUpdate(req.params.dogId, req.body, { new: true }).then(
    dog => {
      return res.json('got /dogs');
    }
  );
}

function deleteDog(req, res, next) {
  return Dog.findByIdAndRemove(req.params.dogId).then(dog => {
    return res.json({ message: 'Object removed' });
  });
}

module.exports = {
  createDog,
  readDogs,
  readDog,
  updateDog,
  deleteDog
};
