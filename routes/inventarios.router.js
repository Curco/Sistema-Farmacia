const express = require('express');

const InventariosService = require('./../Services/inventarios.service');

const router = express.Router();
const service = new InventariosService();


router.get('/', (req, res) => {
  const inventarios = service.find();
  res.json(inventarios);
});

router.get('/filter', (req, res) => {
  res.send('Aqui filtrando tranqui');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.get('/categorias/:catId/productos/:prodId', (req, res) => {
  const { catId, prodId } = req.params;
  res.json({
    catId,
    prodId,
  });
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = service.create(body);
  res.status(201).json(newProduct);
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = service.update(id, body);
  res.json(product);
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.delete(id);
  res.json(product);
})

module.exports = router;
