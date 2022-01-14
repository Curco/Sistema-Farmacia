const express = require('express');
const faker = require('faker');

const router = express.Router();


router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 3;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    })
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Aqui filtrando tranqui');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if ( id === '222' ) {
    res.status(404).json({
      message: 'Not Found'
    });
  } else {
    res.status(200).json({
      id,
      product: 'producto 2',
      price: 15
    });
  }
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
  res.status(201).json({
    message: 'Creando nuevo producto',
    data: body,
  })
})

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: 'Actualizando producto',
    data: body,
    id,
  })
})

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'Borrando producto',
    id,
  })
})

module.exports = router;
