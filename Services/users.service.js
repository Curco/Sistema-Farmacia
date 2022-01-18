const { fake } = require("faker");
const faker = require("faker");

class UsersServices {

  constructor() {
    this.users = [];
    this.generate();
  }

  generate () {
    const limit = 10;
    for (let index = 0; index < limit; index++) {
      this.facturas.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        gender: faker.name.gender(),
        age: parseInt(faker.datatype.number(), 10),
        phone: faker.phone.phoneNumber(),
        address: faker.address.direction(),
      })
    }
  }

  create (data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.users.push(newProduct);
    return newUser;
  }

  find() {
    return this.users;
  }

  findOne(id) {
    return this.users.find(item => item.id === id);
  }

  update (id, changes) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Factura not found');
    }
    const user = this.users[index];
    this.users[index] = {
      ...product,
      ...changes
    }
    return this.users[index];
  }

  delete (id) {
    const index = this.users.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('Product not found');
    }
    this.users.splice(index, 1);
    return { id };
  }
}

module.exports = UsersServices;
