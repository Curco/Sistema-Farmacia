const express = require('express');
const faker = require('faker');
const facturasServices = require('../Services/facturas.service');

const router = express.Router();
const service = new facturasServices();

router.get('/', (req, res) => {
  const facturas = service.find();
  res.json(facturas);
});

module.exports = router;
