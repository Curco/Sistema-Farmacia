const express = require("express");
const res = require("express/lib/response");
const faker = require("faker");

class InventariosService {

  constructor() {
    this.inventarios = [];
    this.generate();
  }

  generate () {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.inventarios.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        date: faker.date.recent(),
      });
    }
  }

  create (data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.inventarios.push(newProduct);
    return newProduct;
  }

  find() {
    return this.inventarios;
  }

  findOne(id) {
    return this.inventarios.find(item => item.id === id);
  }

  update (id, changes) {
    const index = this.inventarios.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    const product = this.inventarios[index];
    this.inventarios[index] = {
      ...product,
      ...changes
    }
    return this.inventarios[index];
  }

  delete (id) {
    const index = this.inventarios.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.inventarios.splice(index, 1);
    return { id };
  }

}

module.exports = InventariosService;
