const express = require('express');
const faker = require('faker');
const ImpuestosServices = require('../Services/impuestos.service');

const router = express.Router();
const service = new ImpuestosServices();

router.get('/', (req, res) => {
  const impuestos = service.find();
  res.json(impuestos);
});

module.exports = router;
