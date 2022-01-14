const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const factura = [];
  const { cant } = req.query;
  const limit = cant || 5;
  for (let index = 0; index < limit; index++) {
    factura.push({
      productName: faker.commerce.productName(),
      productPrice: parseInt(faker.commerce.price(), 10),
      productDate: faker.date.recent(),
    })
  }
  res.json(factura);
});

module.exports = router;
