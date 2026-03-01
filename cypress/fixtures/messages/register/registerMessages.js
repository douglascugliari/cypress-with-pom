module.exports = class RegisterMessages {

    static successMessage() {
        return 'Cadastro realizado com sucesso'
    }

    static errorMessageEmptyFields() {
        return ["Nome é obrigatório", "Email é obrigatório", "Password é obrigatório"]
    }
}