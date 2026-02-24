# Cypress Testing Framework

Um framework robusto de testes end-to-end para aplicações web utilizando Cypress, desenvolvido para automatizar testes de funcionalidades críticas em aplicações web modernas.

## 🚀 Sobre o Projeto

Este projeto implementa uma suíte completa de testes automatizados utilizando Cypress v15.10.0 com integração da Testing Library. O framework está configurado para testar aplicações web com foco em autenticação, gestão de usuários e manipulação de produtos.

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou pnpm
- Navegadores Chrome, Firefox, Edge ou Safari

## 🛠️ Instalação

```bash
# Clonar o repositório
git clone <repository-url>

# Navegar até o diretório do projeto
cd "Testes Automatizados/Cypress"

# Instalar dependências
pnpm install
# ou
npm install
```

## 🏗️ Estrutura do Projeto

```
cypress/
├── e2e/                    # Testes end-to-end
│   ├── auth-login.cy.js           # Testes de autenticação
│   ├── product-management.cy.js   # Testes de gestão de produtos
│   └── user-registraton.cy.js     # Testes de registro de usuários
├── fixtures/               # Dados de teste
│   ├── Elements/          # Elementos reutilizáveis
│   ├── Factories/         # Factories de dados
│   └── TestData/          # Dados de teste estáticos
├── support/               # Configurações e utilidades
│   ├── pages/            # Page Objects
│   ├── commands.js       # Comandos customizados
│   └── e2e.js           # Configurações globais
└── config.js             # Configuração do Cypress
```

## 🚀 Executando os Testes

### Modo Interativo
```bash
# Abrir interface Cypress
pnpm run open
# ou
npm run open
```

### Modo Headless
```bash
# Executar todos os testes
pnpm run test
# ou
npm run test
```

### Executar Testes Específicos
```bash
# Executar arquivo específico
npx cypress run --spec "cypress/e2e/auth-login.cy.js"

# Executar teste por padrão
npx cypress run --spec "**/*login*.cy.js"
```

## 📊 Relatórios

Os testes geram relatórios automáticos com:
- Screenshots de falhas
- Videos de execução
- Logs detalhados
- Métricas de performance

## 🔧 Configuração

### Variáveis de Ambiente
O projeto está configurado para testar o ambiente:
- **Base URL**: `https://front.serverest.dev`

### Configurações Adicionais
- Timeout padrão: 10 segundos
- Suporte a múltiplos navegadores
- Integração com Testing Library

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `pnpm test` | Executa todos os testes em modo headless |
| `pnpm open` | Abre interface interativa do Cypress |

## 🧩 Tecnologias Utilizadas

- **Cypress** v15.10.0 - Framework de testes E2E
- **Testing Library** v10.1.0 - Utilitários de teste
- **Node.js** - Runtime JavaScript
- **pnpm** - Gerenciador de pacotes

## 📋 Casos de Teste

### Autenticação (`auth-login.cy.js`)
- Login com credenciais válidas
- Login com credenciais inválidas
- Logout da aplicação
- Validação de campos obrigatórios

### Gestão de Usuários (`user-registraton.cy.js`)
- Registro de novo usuário
- Validação de dados duplicados
- Edição de perfil
- Exclusão de conta

### Gestão de Produtos (`product-management.cy.js`)
- Criação de produtos
- Edição de informações
- Exclusão de produtos
- Busca e filtragem

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona NovaFuncionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📝 Boas Práticas

- Utilizar Page Objects para melhor organização
- Manter testes independentes e isolados
- Usar dados de teste consistentes
- Documentar casos de teste complexos
- Validar mensagens de erro esperadas

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👤 Autor

**Douglas Panizza Cugliari dos Santos**

- GitHub: [@douglaspanizza](https://github.com/douglaspanizza)
- LinkedIn: [douglas-panizza](https://linkedin.com/in/douglas-panizza)

## 📞 Suporte

Para dúvidas ou suporte:
- Abra uma issue no repositório
- Entre em contato através do LinkedIn
- Consulte a [documentação oficial do Cypress](https://docs.cypress.io)
