const express = require("express");
const faker = require("faker");

class facturasServices {
  constructor() {
    this.facturas = [];
    this.generate();
  }

  generate () {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.facturas.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        date: faker.date.recent(),
      })
    }
  }

  create (data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.facturas.push(newProduct);
    return newProduct;
  }

  find() {
    return this.facturas;
  }

  findOne(id) {
    return this.facturas.find(item => item.id === id);
  }

  update (id, changes) {
    const index = this.facturas.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Factura not found');
    }
    const product = this.facturas[index];
    this.facturas[index] = {
      ...product,
      ...changes
    }
    return this.facturas[index];
  }

  delete (id) {
    const index = this.facturas.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.facturas.splice(index, 1);
    return { id };
  }
}

module.exports = facturasServices;
