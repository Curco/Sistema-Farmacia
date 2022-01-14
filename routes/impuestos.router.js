const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const registro = [];
  const { cant } = req.query;
  const lim = cant || 5;
  for (let index = 0; index < lim; index++) {
    registro.push( {
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      description: faker.commerce.productDescription(),
      date: faker.date.recent(),
    })
  }
  res.json(registro);
});

module.exports = router;
