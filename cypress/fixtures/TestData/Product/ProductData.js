export class ProductData {

    static productValid() {
        return {
            name: `product${Math.random().toString(36).substring(2, 15)}`,
            price: '100',
            description: 'Description 1',
            quantity: '10'
        }
    }

    static productInvalid() {
        return {
            name: 'Product 1',
            price: '-1',
            description: 'Description 1',
            quantity: '-1'
        }
    }

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
