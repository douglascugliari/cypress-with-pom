module.exports = class RegisterData {

    static registerValid() {
        return {
            name: `testefalho${Math.random().toString(36).substring(2, 15)}`,
            email: `testefalho${Math.random().toString(36).substring(2, 15)}@example.com`,
            password: '671026924'
        }
    }

    static registerEmailInvalid() {
        return {
            name: `testefalho${Math.random().toString(36).substring(2, 15)}`,
            email: `testefalho${Math.random().toString(36).substring(2, 15)}`,
            password: '671026924'
        }
    }

    static successMessage() {
        return 'Cadastro realizado com sucesso'
    }

    static errorMessageEmptyFields() {
        return ["Nome é obrigatório", "Email é obrigatório", "Password é obrigatório"]
    }
}