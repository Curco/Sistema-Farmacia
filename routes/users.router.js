const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('/', (req, res) => {
  const user = [];
  const { size } = req.query;
  const limit = size || 5;
  for (let index = 0; index < limit; index++) {
    user.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      phone: faker.phone.phoneNumber(),
      bio: faker.lorem.paragraph(),
      image: faker.image.people(),
    })
  }
  res.json(user);
});

router.get('/us', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    })
  } else {
    res.send('No hay parámetros de búsqueda');
  }
});

module.exports = router;
