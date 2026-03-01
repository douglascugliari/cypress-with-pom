# 🚀 Cypress Testing Framework com POM

Um framework enterprise de testes end-to-end para aplicações web utilizando **Cypress v15.10.0** com arquitetura **Page Object Model (POM)**, **Factory Pattern** e sistema de relatórios profissional com Mochawesome. Desenvolvido seguindo as melhores práticas de automação para garantir máxima manutenibilidade e escalabilidade.

## � Visão Geral

Este projeto implementa uma suíte completa de testes automatizados para a plataforma **ServeRest**, cobrindo fluxos críticos de autenticação, gestão de usuários e manipulação de produtos. O framework está production-ready com configurações otimizadas para CI/CD e relatórios executivos.

## ✨ Diferenciais Competitivos

- 🏗️ **Arquitetura Enterprise**: Page Object Model com Factory Pattern
- 📊 **Relatórios Profissionais**: Mochawesome com charts, screenshots e vídeos embedados
- 🎯 **Dados Dinâmicos**: Faker.js para massa de testes única e realista
- 🔧 **Integração API**: Serviços para criação de dados via API
- 📱 **Multi-Browser**: Chrome, Firefox, Edge e Safari
- 🚀 **CI/CD Ready**: Configuração otimizada para pipelines
- 🌙 **Tema Dark Profissional**: Interface moderna para relatórios

## �️ Stack Tecnológico

### Core Framework
- **Cypress** v15.10.0 - Framework E2E testing
- **Testing Library** v10.1.0 - Utilitários de teste acessíveis
- **Node.js** - Runtime JavaScript

### Data Generation
- **@faker-js/faker** v9.3.0 - Geração de dados realistas em PT-BR

### Reporting & Visualization
- **Mochawesome** v7.1.4 - Relatórios HTML com charts
- **Mochawesome Merge** v5.1.1 - Consolidação de relatórios
- **Mochawesome Report Generator** v6.3.2 - Gerador de relatórios
- **Cypress Multi Reporters** v2.0.5 - Múltiplos formatos

### Development Tools
- **pnpm** - Gerenciador de pacotes eficiente
- **Mocha** v11.7.5 - Test runner underlying

## 📋 Pré-requisitos

- Node.js v16+ 
- npm ou pnpm
- Navegadores modernos (Chrome, Firefox, Edge, Safari)

## � Instalação e Configuração

```bash
# Clonar repositório
git clone <repository-url>

# Navegar ao projeto
cd "Testes Automatizados/Cypress"

# Instalar dependências
pnpm install
# ou
npm install
```

## 🏗️ Arquitetura do Projeto

```
cypress/
├── e2e/                           # Casos de teste E2E
│   ├── auth-login.cy.js           # Autenticação (TC-001 a TC-005)
│   ├── product-management.cy.js   # Gestão de Produtos (TC-010 a TC-014)
│   └── user-registration.cy.js     # Registro de Usuários (TC-007 a TC-009)
├── fixtures/                      # Massa de dados e configurações
│   ├── elements/                  # Seletores CSS (JSON)
│   │   ├── elementLogin.json
│   │   ├── elementProduct.json
│   │   └── elementRegister.json
│   ├── factories/                 # Factory Pattern para dados dinâmicos
│   │   ├── loginFactory.js
│   │   ├── productFactory.js
│   │   └── userFactory.js
│   └── messages/                  # Mensagens de validação
│       ├── login/
│       ├── product/
│       └── register/
├── services/                      # Integração com APIs externas
│   └── userService.js             # Criação de usuários via API
├── support/                       # Configurações e utilidades
│   ├── pages/                     # Page Objects (POM)
│   │   ├── loginPage.js
│   │   ├── productPage.js
│   │   └── registerPage.js
│   ├── commands.js                # Comandos customizados
│   └── e2e.js                     # Configurações globais
└── reports/                       # Relatórios gerados
    ├── html/                      # Relatórios HTML com Mochawesome
    ├── mocha/                     # Dados brutos JSON
    ├── screenshots/               # Screenshots de falhas
    └── videos/                    # Vídeos de execução
```

## 🎯 Executando os Testes

### Modo Interativo (Desenvolvimento)
```bash
pnpm run cy:open
```

### Modo Headless (CI/CD)
```bash
# Executar todos os testes
pnpm run cy:run

# Executar com interface gráfica (debugging)
pnpm run cy:run:headed
```

### Pipeline Completo com Relatórios
```bash
# Executar teste completo + gerar relatório HTML
pnpm run test:report
```

### Execução Específica
```bash
# Arquivo específico
npx cypress run --spec "cypress/e2e/auth-login.cy.js"

# Por padrão (wildcard)
npx cypress run --spec "**/*login*.cy.js"

# Test case específico
npx cypress run --spec "**/*TC-001*.cy.js"
```

## 📊 Sistema de Relatórios Profissional

### Features Avançadas
- 📈 **Charts Interativos**: Visualização de pass/fail rate e estatísticas
- 🖼️ **Screenshots Automáticas**: Capturas de falhas embedadas
- 🎥 **Vídeos Integrados**: Vídeos de execução no HTML
- 📋 **Timeline Detalhada**: Ordenamento por status e timestamps
- 🌙 **Tema Dark**: Interface profissional
- 📱 **Responsivo**: Acessível em qualquer dispositivo

### Scripts de Relatório
```bash
# Limpar relatórios anteriores
npm run report:clean

# Mesclar múltiplos relatórios JSON
npm run report:merge

# Gerar relatório HTML completo
npm run report:generate

# Pipeline completo
npm run test:report
```

## 📋 Matriz de Casos de Teste

### 🔐 Autenticação (`auth-login.cy.js`)
| TC | Descrição | Tipo | Prioridade |
|----|-----------|------|------------|
| TC-001 | Login com credenciais válidas | Positivo | Alta |
| TC-002 | Login com credenciais inválidas | Negativo | Alta |
| TC-003 | Login com campos vazios | Negativo | Média |
| TC-004 | Validação formato de email | Negativo | Média |
| TC-005 | Redirecionamento por perfil | Positivo | Alta |

### 👥 Registro de Usuários (`user-registraton.cy.js`)
| TC | Descrição | Tipo | Prioridade |
|----|-----------|------|------------|
| TC-007 | Registro novo usuário válido | Positivo | Alta |
| TC-008 | Registro com email inválido | Negativo | Alta |
| TC-009 | Registro com campos vazios | Negativo | Média |

### 📦 Gestão de Produtos (`product-management.cy.js`)
| TC | Descrição | Tipo | Prioridade |
|----|-----------|------|------------|
| TC-010 | Cadastrar produto válido | Positivo | Alta |
| TC-011 | Cadastrar produto inválido | Negativo | Alta |
| TC-012 | Cadastrar com campos vazios | Negativo | Média |
| TC-013 | Excluir produto | Positivo | Alta |
| TC-014 | Cadastrar nome duplicado | Negativo | Alta |

## ⚙️ Configurações Avançadas

### Variáveis de Ambiente
- **Base URL**: `https://front.serverest.dev`
- **Viewport**: 1280x720 (desktop-first)
- **Timeouts**: 10 segundos (comandos, request, response)

### Configurações de Execução
- **Video Compression**: 32 (otimizado para CI/CD)
- **Screenshots**: Automáticas em falhas
- **Retries**: 1 em modo CI, 0 em desenvolvimento
- **Multi-Reporter**: Mochawesome + Console logs

### Page Object Model
O framework implementa POM com:
- **Separação de Responsabilidades**: Lógica separada de seletores
- **Manutenibilidade**: Mudanças na UI refletem apenas nos Page Objects
- **Reusabilidade**: Métodos compartilhados entre testes
- **Readability**: Testes limpos e auto-explicativos

### Factory Pattern
- **Dados Dinâmicos**: Faker.js para dados únicos
- **Evita Collisions**: Testes independentes
- **Massa de Testes**: Dados válidos/inválidos parametrizados
- **Localização**: Suporte a PT-BR para dados realistas

## � Scripts Disponíveis

| Script | Descrição | Modo |
|--------|-----------|------|
| `pnpm cy:run` | Executa todos os testes headless | CI/CD |
| `pnpm cy:run:headed` | Executa com interface gráfica | Debug |
| `pnpm cy:open` | Abre interface interativa | Dev |
| `pnpm report:clean` | Limpa diretórios de relatórios | Maintenance |
| `pnpm report:merge` | Mescla relatórios JSON | Reporting |
| `pnpm report:generate` | Gera relatório HTML | Reporting |
| `pnpm test:report` | Pipeline completo | CI/CD |

## 🔄 CI/CD Integration

### GitHub Actions
```yaml
name: Cypress Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run test:report
      - uses: actions/upload-artifact@v3
        with:
          name: cypress-reports
          path: cypress/reports/html
```

### Variáveis de Ambiente CI
- `CYPRESS_baseUrl`: URL da aplicação
- `CYPRESS_videoCompression`: Compressão de vídeo
- `CYPRESS_screenshotOnRunFailure`: Captura automática

## 🎯 Boas Práticas Implementadas

### 🏗️ Arquitetura
- **Page Object Model**: Separação clara de responsabilidades
- **Factory Pattern**: Geração dinâmica de dados
- **DRY Principle**: Reutilização de código
- **Single Responsibility**: Classes com responsabilidade única

### 🧪 Qualidade
- **Testes Independentes**: Isolamento completo
- **Dados Parametrizados**: Massa externa e configurável
- **Assertivas Claras**: Validações explícitas
- **Coverage Flows**: Cobertura dos caminhos críticos

### 📊 Relatórios
- **Visualização Profissional**: Charts e métricas
- **Evidências Automáticas**: Screenshots e vídeos
- **Histórico**: Manutenção de relatórios
- **Compartilhamento**: HTML standalone

## 🤝 Contribuição

### Processo
1. **Fork** o projeto
2. **Criar Branch**: `git checkout -b feature/NovaFuncionalidade`
3. **Commit**: `git commit -m 'Adiciona NovaFuncionalidade'`
4. **Push**: `git push origin feature/NovaFuncionalidade`
5. **Pull Request**: Abrir PR com descrição detalhada

### Guidelines
- Seguir padrão **Page Object Model**
- Adicionar **Factory Pattern** para novos dados
- Incluir **ID de Test Case** (TC-XXX)
- Documentar novos casos na matriz
- Manter **coverage** acima de 80%
- Adicionar asserts com mensagens descritivas

##  Documentação

### 🔗 Links Úteis
- [Documentação Oficial Cypress](https://docs.cypress.io)
- [Page Object Model Guide](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/)
- [Testing Library Cypress](https://testing-library.com/docs/cypress-testing-library/intro/)
- [Mochawesome Documentation](https://www.npmjs.com/package/mochawesome)

### 📖 Tutoriais Internos
- Como adicionar novos Page Objects
- Criando Factories de dados
- Configurando ambientes de teste
- Debugging com Cypress Studio

## 👤 Autor

**Douglas Panizza Cugliari dos Santos**
*Senior QA Engineer & Test Automation Specialist*

- 🚀 **GitHub**: [@douglascugliari](https://github.com/douglascugliari)
- 💼 **LinkedIn**: [Douglas Panizza Cugliari dos Santos](https://linkedin.com/in/douglascugliari)
- 📧 **Email**: douglas.cugliari@hotmail.com

## 📞 Suporte

### 🆘 Canais de Ajuda
- 🐛 **Bugs**: [GitHub Issues](https://github.com/douglascugliari/cypress-with-pom/issues)
- 💡 **Sugestões**: [GitHub Enhancement](https://github.com/douglascugliari/cypress-with-pom/issues/new?labels=enhancement)
- 📖 **Documentação**: [Project Wiki](https://github.com/douglascugliari/cypress-with-pom/wiki)


---

## � Status do Projeto

✅ **Ativo** | 🚀 **Production Ready** | 📈 **Em Evolução**

---

⭐ **Se gostou do projeto**: deixe uma star no GitHub!
🔄 **Compartilhe**: ajude a comunidade de testes automatizados
🤝 **Contribua**: faça parte da evolução do framework
