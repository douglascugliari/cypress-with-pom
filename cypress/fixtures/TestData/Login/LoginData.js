export class LoginData {

    static loginValid() {
        const compEmail = Math.random().toString(36).substring(2, 15)
        return {
            email: `testefalho${compEmail}@example.com`,
            password: '671026924'
        }
    }

    static loginInvalid() {
        return {
            email: 'testefa@example.com',
            password: '671026924'
        }
    }

    static emailFormatInvalid() {
        return {
            email: 'emailinvalido',
            password: '123456'
        }
    }

    static mensagesErrorMultiple() {
        return ['Email é obrigatório', 'Password é obrigatório']
    }

    static mensagesErrorLoginInvalid() {
        return 'Email e/ou senha inválidos'
    }
}