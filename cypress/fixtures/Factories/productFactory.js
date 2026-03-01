const { faker } = require('@faker-js/faker/locale/pt_BR');

module.exports = {
    createProductValid: () => {
        return {
            name: faker.commerce.productName(),
            price: faker.commerce.price({ min: 0, max: 1000, dec: 0 }),
            description: faker.commerce.productDescription(),
            quantity: faker.number.int({ min: 0, max: 100 })
        }
    },

    createProductInvalid: () => {
        return {
            name: faker.commerce.productName(),
            price: -1,
            description: faker.commerce.productDescription(),
            quantity: -1
        }
    }
}