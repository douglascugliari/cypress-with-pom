module.exports = class LoginMessages {

    static mensagesErrorMultiple() {
        return ['Email é obrigatório', 'Password é obrigatório']
    }

    static mensagesErrorLoginInvalid() {
        return 'Email e/ou senha inválidos'
    }
}