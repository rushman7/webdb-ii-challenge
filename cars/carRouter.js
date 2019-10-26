const router = require('express').Router();

const db = require('../data/dbConfig');

router.get('/', (req, res) => {
  db('cars')
    .then(cars => res.status(200).json(cars))
    .catch(err => res.status(500).json(err))
})

router.post('/', validateInput, (req, res) => {
  db('cars').insert(req.body)
    .then(cars => res.status(201).json(cars))
    .catch(err => res.status(500).json(err))
})

function validateInput(req, res, next) {
  const { car, VIN, make, model, mileage } = req.body

  if (!req.body) res.status(400).json({ error: 'No inputs sent' })
  else if (!car || !VIN || !make || !model || !mileage ) res.status(400).json({ error: 'Missing some inputs: car/VIN/make/model/mileage' })
  else next();
}

module.exports = router;