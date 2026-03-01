const { faker } = require('@faker-js/faker');

module.exports = {
    createUserValid: () => {
        const name = faker.person.firstName();
        const email = faker.internet.email();
        const password = faker.internet.password();
        return {
            name,
            email,
            password
        };
    },

    createUserInvalid: () => {
        const name = faker.person.firstName();
        const email = 'emailinvalido';
        const password = faker.internet.password();
        return {
            name,
            email,
            password
        };
    }
};