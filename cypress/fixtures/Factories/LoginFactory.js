function createLoginData(user) {
    const nome = user.nome || 'Fulano da Silva'
    const email = user.email || 'beltrano@qa.com.br'
    const password = user.password || 'teste'
    const administrador = user.administrador || 'true'

    const payload = {
        email,
        password,
        administrador,
        nome
    }

    return cy.request({
        method: 'POST', url: 'https://serverest.dev/usuarios', body: payload,
        Headers: {
            'Content-Type': 'application/json'
        }
    }).then((resp) => {
        const user = {
            email,
            password,
            id: resp?.body?.id,
            respBody: resp.body,
        }
        return user
    })
}

module.exports = createLoginData