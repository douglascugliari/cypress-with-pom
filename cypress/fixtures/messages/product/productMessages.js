module.exports = class ProductMessages {

    static expectedMessagesError() {
        return ['Preco deve ser um número positivo',
            'Quantidade deve ser maior ou igual a 0']
    }

    static expectedMessagesErrorMultiple() {
        return [
            'Nome é obrigatório',
            'Preco é obrigatório',
            'Descricao é obrigatório',
            'Quantidade é obrigatório'
        ]
    }
}
