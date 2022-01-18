const faker = require("faker");

class ImpuestosServices {

  constructor() {
    this.impuesto = [];
    this.generate();
  }

  generate() {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.impuesto.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        date: faker.date.recent(),
      })
    }
  }

  create(data) {
    const newImpuesto = {
      id: faker.datatype.uuid(),
      ...data
    }
    return newImpuesto;
  }

  find () {
    return this.impuesto;

  }

  findOne() {
    return this.impuesto.find(item => item.id === id);
  }

  update(id, changes) {
    const index = this.impuesto.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const factura = this.impuesto[index];
    this.impuesto[index] = {
      ...factura,
      ...changes
    }
    return this.impuesto[index];
  }

  delete (id) {
    const index = this.impuesto.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.impuesto.splice(index, 1);
    return { id };
  }
}

module.exports = ImpuestosServices;
