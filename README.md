# Sistema de Comunicação no Casamento

Este projeto é um sistema de apoio para casais da comunidade, desenvolvido para fortalecer a comunicação no casamento após os 14 encontros realizados na igreja.

## Módulos

O sistema possui três módulos principais:

1. **DISC** - Perfil comportamental e sua influência na comunicação
2. **Círculos de Relacionamento** - Visualização e organização das relações pessoais
3. **5 Linguagens do Amor** - Identificação de como cada cônjuge prefere dar e receber amor

## Melhorias Implementadas

### Design e Usabilidade
- Interface mais limpa e moderna com cores suaves
- Tipografia ajustada para melhor legibilidade
- Espaçamento adequado entre elementos
- Design responsivo para diferentes dispositivos
- Navegação intuitiva com botões de retorno ao menu

### Módulo de Círculos de Relacionamento
- Reprogramado para permitir adicionar nomes dentro dos círculos
- Fundo dos nomes ajustado automaticamente ao tamanho do texto
- Posicionamento flexível dos nomes por arrastar e soltar
- Sugestões de nomes previamente adicionados

### Navegação
- Menu principal reorganizado com cards informativos
- Botões de retorno em todas as páginas
- Fluxo de navegação mais intuitivo
- Feedback visual para ações do usuário

### Estrutura do Código
- Organização em componentes reutilizáveis
- Separação clara entre páginas e componentes
- Estilos consistentes em toda a aplicação
- Código mais limpo e manutenível

## Instruções de Uso

### Instalação
1. Extraia os arquivos do projeto
2. Abra um terminal na pasta do projeto
3. Execute `npm install` para instalar as dependências
4. Configure suas credenciais Auth0 no arquivo `src/App.jsx`

### Execução
1. Execute `npm run dev` para iniciar o servidor de desenvolvimento
2. Acesse `http://localhost:5173` no navegador

### Configuração do Auth0
No arquivo `src/App.jsx`, substitua as seguintes linhas com suas credenciais:
```jsx
<Auth0Provider
  domain="seu-dominio-auth0.auth0.com"
  clientId="seu-client-id-auth0"
  redirectUri={window.location.origin}
>
```

## Estrutura de Arquivos

```
src/
├── components/       # Componentes reutilizáveis
│   ├── Header.jsx    # Cabeçalho com navegação
│   ├── MenuCard.jsx  # Cards do menu principal
│   └── ProtectedRoute.jsx # Proteção de rotas autenticadas
├── pages/            # Páginas principais
│   ├── Login.jsx     # Página de login
│   ├── Menu.jsx      # Menu principal
│   ├── DISC.jsx      # Módulo DISC
│   ├── CirculosRelacionamento.jsx # Módulo Círculos
│   └── LinguagensDoAmor.jsx # Módulo 5 Linguagens
├── App.jsx           # Configuração de rotas
├── main.jsx          # Ponto de entrada
└── index.css         # Estilos globais
```
