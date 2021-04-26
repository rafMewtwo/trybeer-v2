# Boas vindas ao repositório do projeto TryBeer v2!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus códigos.

# Sumário

- [Habilidades](#habilidades)
- [Entregáveis](#entregáveis)
  - [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Data de entrega](#data-de-entrega)
- [Instruções para entregar seu projeto](#instruções-para-entregar-seu-projeto)
  - [Antes de começar a desenvolver](#antes-de-começar-a-desenvolver)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Nomenclatura](#nomenclatura)
  - [Linter](#linter)
  - [Observações importantes](#observações-importantes)
- [Requisitos do projeto](#requisitos-do-projeto)

    `Requisitos Obrigatórios:`

    - [1 - Desenvolver os status para o pedido da tela de `Detalhe pedido` do Administrador](#1---desenvolver-os-status-para-o-pedido-da-tela-de-detalhe-pedido-do-administrador)
    - [2 - Desenvolver os status para o pedido da tela `Pedidos` do Administrador](#2---desenvolver-os-status-para-o-pedido-da-tela-pedidos-do-administrador)
    - [3 - Desenvolver os status para o pedido da tela `Pedidos do Cliente`](#3---desenvolver-os-status-para-o-pedido-da-tela-pedidos-do-cliente)
    - [4 - Desenvolver os status para o pedido da tela `Detalhes de Pedido` do Cliente](#4---desenvolver-os-status-para-o-pedido-da-tela-Detalhes-de-pedido-do-cliente)
    - [5 - Criar um botão no sidebar para acessar o chat do cliente](#5---criar-um-botão-no-sidebar-para-acessar-o-chat-do-cliente)
    - [6 - Desenvolver funcionalidade de chat na visão de cliente](#6---desenvolver-funcionalidade-de-chat-na-visão-de-cliente)
    - [7 - Criar botão no sidebar para acessar a lista de chats do administrador](#7---criar-botão-no-sidebar-para-acessar-a-lista-de-chats-do-administrador)
    - [8 - Criar funcionalidade de lista de conversas de chat na visão de administrador](#8---criar-funcionalidade-de-lista-de-conversas-de-chat-na-visão-de-administrador)
    - [9 - Desenvolver funcionalidade de chat na visão de administrador](#9---desenvolver-funcionalidade-de-chat-na-visão-de-administrador)
    - [10 - Desenvolva a cobertura de testes unitários do back-end](#10---desenvolva-a-cobertura-de-testes-unitários-do-back-end)

    `Requisitos Bônus:`

    - [11 - Realizar o deploy do projeto back-end e front-end](#11---realizar-o-deploy-do-projeto-back-end-e-front-end)
    - [12 - Desenvolva a cobertura de testes unitários do front-end](#12---desenvolva-a-cobertura-de-testes-unitários-do-front-end)
- [Depois de terminar o desenvolvimento (Opcional)](#depois-de-terminar-o-desenvolvimento)
- [Revisando um pull request](#revisando-um-pull-request)
- [Avisos Finais](#avisos-finais)

# Habilidades

- Organização do seu código e a arquitetura geral da aplicação (tanto da API quando do front-end);

- Usar sockets através do socket.io;

- Aderência aos princípios SOLID;

- Cobertura de testes no back-end e no front-end.

- Aprender a usar dois bancos de dados paralelamente na mesma aplicação.

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## O que deverá ser desenvolvido

Esse projeto é uma continuação do projeto `Trybeer`! Ou seja, o _commit_ inicial nesse repositório será todo o projeto que foi desenvolvido por vocês anteriormente. Logo, esse será o ponto de partida de vocês para esse projeto.

Nesse projeto vocês irão desenvolver novas funcionalidades a partir dos conhecimentos adquiridos nos últimos blocos. Além de desenvolver novas funcionalidades, vocês terão também novos desafios, pois algumas demandas farão com que vocês refatorem a arquitetura do projeto.

No projeto `Trybeer v1` vocês utilizaram apenas o banco de dados _MySQL_. Já nesse projeto além do _MySQL_, vocês terão que utilizar o _MongoDB_. Vocês verão com mais detalhes nos requisitos do projeto.

Nesse projeto será necessário:

* Refatorar a camada de modelo para usar Sequelize;
* Possibilitar que um administrador possa mudar o status atual de um pedido para um terceiro tipo `Preparando` e exibir essa informação nas partes que são determinadas;
* Desenvolver um chat onde um cliente possa conversar diretamente com o administrador;
* Fazer testes com cobertura de 90% para o back-end e front-end;
* Fazer deploy da aplicação utilizando o Heroku

Dito tudo isso, vamos para os requisitos para que vocês tenham maiores detalhes do que deve ser desenvolvido nesse projeto!

Você pode acessar um protótipo do front-end [aqui](https://www.figma.com/file/dRYG01MdRnxQr6nlp1wT2o/Trybeer-v2?node-id=0%3A1).

Para servir arquivos estáticos como imagens no back-end, utilize o seguinte path:
`/back-end/public/`

##### ⚠️ Lembre-se de escrever testes unitários e sinta-se livre para alterar a UI. Contudo, respeite os atributos `data-testid`, pois eles serão usados na correção do projeto.

Você pode ler mais sobre os atributos que serão utilizados para testes [neste link](https://www.eduardopedroso.com.br/?p=494).

##### ⚠️ Para ver os comentários sobre cada componente, basta clicar no ícone de comentários no Figma (lado esquerdo superior).

![image](https://res.cloudinary.com/drdpedroso/image/upload/c_scale,w_400/v1575815877/Screenshot_2019-12-08_at_11.37.25_kzt7rl.png)

___

## Data de Entrega

  - Serão `5` dias de projeto.
  - Data de entrega para avaliação final do projeto: `03/05/2021 - 14:00h`.

---

# Instruções para entregar seu projeto:

## Antes de começar a desenvolver:

1. Clone o repositório
  * `git clone https://github.com/tryber/sd-06-project-trybeer-v2.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-06-project-trybeer-v2`

2. Instale as dependências [**Caso existam**]
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-sd-06-project-trybeer-v2`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-sd-06-project-trybeer-v2`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-06-project-trybeer-v2/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-06-project-trybeer-v2/pulls) e confira que o seu _Pull Request_ está criado

---

## Durante o desenvolvimento

* ⚠ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

* ⚠ **LEMBRE-SE DE CRIAR TODOS OS ARQUIVOS DENTRO DA PASTA COM O SEU NOME** ⚠

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

# Como desenvolver

Este repositório já contém um _backend_ e um _frontend_ com suas respectivas bases criadas. Após clonar o projeto, entre nas respectivas pastas para instalar as dependências.

---

## Nomenclatura

**ATENÇÃO!** Muito cuidado com os nomes especificados nos requisitos! O conteúdo deve ser **exatamente igual** ao texto descrito no requisito. Em alguns componentes foram colocadas propriedades chamadas _data-testid_ que, sob nenhuma hipótese devem ser alteradas. Os detalhes acima tem implicação direta no funcionamento do avaliador.

Os testes foram desenvolvidos dessa forma para permitir uma maior liberdade para estruturar e estilizar a página, portanto, abusem da criatividade! 😉

## Linter

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json` nos seguintes caminhos:

- `sd-06-project-trybeer-v2/back-end/package.json`
- `sd-06-project-trybeer-v2/front-end/package.json`

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Devido ao fato de as configurações das regras do `ESLint` dos projetos de front e back **serem diferentes**, **é preciso executar o `ESLint` em cada projeto**.

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

---

Usaremos também o [StyleLint](https://stylelint.io/) para fazer a análise estática do seu código.

**O Stylelint é aplicável _APENAS_ no frontend**

Para poder rodar o `StyleLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint:styles`. Se a análise do `StyleLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

⚠️ **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.
ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠️

---

## Observações importantes

Esse repositório deve conter, como dito anteriormente, o código desenvolvido por vocês no primeiro projeto `Trybeer`. Após clonar o projeto, faça o _commit_ inicial com todo o código do projeto e comece o desenvolvimento dos requisitos a partir dele.

Para o banco de dados, você deverá utilizar o `MySQL` e o `MongoDB`. Modele-os e utilize, para o `MySQL`, as funcionalidades do _Sequelize_ para que o seu projeto seja corrigido utilizando o banco de dados arquitetado por você!

##### Você também deve **escrever testes unitários que devem cobrir pelo menos 90% do projeto**. Na [documentação do Jest CLI](https://jestjs.io/docs/en/cli) é possível ver como essa cobertura é coletada.

⚠️ Lembre-se de que o seu projeto só será avaliado se estiver passando pelos _checks_ do **ESLint** e se estiver, também, seguindo corretamente os padrões REST. Além disso, você deve utilizar das `migrations` e dos `seeders` para a criação do seu banco de dados, das tabelas e inserção de dados iniciais.

O intuito desse app é que uma pessoa possa pedir uma cerveja no aplicativo e outra pessoa possa aceitar esse pedido no **admin**.

⚠️ **Dica**: Ao refatorar e adicionar funcionalidades, não se esqueça de que está respeitando os princípios do SOLID. Atente-se a implementação dos princípios sempre que tiver fazendo alguma alteração no código.

⚠️ **Sobre o Sequelize**

- A lógica da regra de negócio da aplicação deve estar centralizada no back-end, ou seja, na API `Node.js`. Com isso, o único lugar que deve conter a lógica será o back-end: o banco de dados e front-end **não devem** conter lógicas de regra de negócio. Ou seja, muito cuidado ao utilizar _triggers_, _procedures_, dentre outras, e muito cuidado com regras de negócio no front-end.

- O projeto deve passar a utilizar o _ORM Sequelize_ ao invés do driver do _MySQL_.

- Crie quantos `seeders` e quantas `migrations` quiser. Porém, lembre-se de criar todas as `migrations` necessárias para que o projeto seja gerado 100% funcional utilizando o banco de dados arquitetado por você. O arquivo `.sql`, contendo as _queries_ de criação/configuração do banco, não será mais necessário, visto que o projeto passará a utilizar `migrations` e `seeders`. Estes devem, portanto, ser removidos.

⚠️ **Atenção muito importante**: Haverá uma pasta chamada `seeders` onde já contém a população do banco MYSQL(não remova, pois a automação ê baseada nela).

Para rodar os arquivos basta rodar esse comando:

`npm run seed` - para popular o banco.

Assim o banco e terá alguns dados inseridos.

**É essencial seguir esses passos!**

**Faça essas configurações para as variáveis de ambiente usadas nesses arquivos:**

1 - Passo

Haverá um arquivo no caminho: `sd-06-project-trybeer-v2/back-end/config/config.js`

```javascript
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.SCHEMA,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    logging: false,
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.SCHEMA,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    logging: false,
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.SCHEMA,
    host: process.env.HOSTNAME,
    dialect: 'mysql',
    logging: false,
  },
};
```

**A variável SCHEMA obrigatoriamente deve ser 'Trybeer'**

2 - Passo

Haverá um arquivo no caminho: `sd-06-project-trybeer-v2/cypress/plugins/index.js`. Neste arquivo, na linha 44, Haverá a seguinte comando:

`config.env.gitHubUser = process.env.GITHUB_USER;`

OBS: O valor da variável `GITHUB_USER` deverá ser o mesmo nome do seu usuário do github. O grupo deve escolher o nome de usuário de uma pessoa integrante.

3 - Passo

No arquivo `sd-06-project-trybeer-v2.github/workflows/main.yml` altere a linha 45 para incluir o nome de usuário utilizado no passo anterior.

antes:
```
GITHUB_USER: ${{ github.actor }}
```

depois:
```
GITHUB_USER: 'fulan_de_tal'
```

4 - Passo

Quando for criar a conexão com o `MONGODB` crie duas variáveis de ambiente `process.env.DB_URL` e `process.env.DB_NAME` e configure o banco conforme exemplo abaixo:

```javascript
const mongoClient = require('mongodb').MongoClient;
require('dotenv').config();

let schema = null;

const connection = async () => {
  if (schema) return Promise.resolve(schema);

  return mongoClient
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((conn) => conn.db(process.env.DB_NAME))
  .then((dbSchema) => {
    schema = dbSchema;
    return schema;
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
module.exports = connection;
```

Onde a variável `process.env.DB_URL` será a url do banco exemplo abaixo:

`DB_URL=mongodb://localhost:27017`

E a variável `process.env.DB_NAME` e o nome do banco com exemplo abaixo:

`DB_NAME=Trybeer`

5 - Passo

OBS: Haverá um arquivo de conexão com o mongodb já pronto no caminho `sd-06-project-trybeer-v2/cypress/plugins/connection.js`, ele é usado para o avaliador, então não se esqueça de adicionar essas variáveis na pasta raiz tambem para poder rodar local.

**Você irá precisar configurar as variáveis globais do MySQL.** Você pode usar esse [Conteúdo de variáveis de ambiente com NodeJS](https://blog.rocketseat.com.br/variaveis-ambiente-nodejs/) como referência.

# Requisitos do projeto

### 1 - Desenvolver os status para o pedido da tela de `Detalhe pedido` do Administrador

- Todo pedido realizado deve ter um status referente ao seu progresso atual.

- Os `status` do pedido devem ser os seguintes:

   - `Pendente` logo quando o pedido for criado;

   - `Preparando` quando o pedido for iniciado pelo usuário admin;

   - `Entregue` quando o pedido for finalizado pelo usuário admin;.

- O usuário admin deve ter o controle de alterar o status do pedido. Lembre-se de seguir princípio `Open/Closed` de _SOLID_ para está implementação de forma que possam ser acrescentados novos comportamentos e `status` sem impactar os status já existentes.

- Qualquer atualização feita no pedido pelo usuário admin deve se refletir em tempo real para o cliente.

#### Tela de `Detalhe pedido` do Administrador

- O botão 'Preparar pedido' deverá conter a tag `data-testid="mark-as-prepared-btn"`

![Tela de detalhes pedidos Administrador](./public/detalhepedidoadmin.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Dado que é feito uma compra, será validado que ela está com status `Pendente` na tela de `Detalhes do pedido` do admin

- Será validado que o administrador ao acessar um determinado pedido ele deve visualizar o botão `Preparar Pedido`

- Será validado que o administrador ao acessar um determinado pedido ele deve visualizar o botão `Marcar como entregue`

- Quando clicar no botão `Preparar pedido` deve alterar o status do detalhe do pedido para `Preparando`

- Quando clicar no botão `Marcar como entregue` deve alterar o status do detalhe do pedido para `Entregue`

- Quando clicar no botão `Marcar como entregue` os botões `Preparar pedido` e `Marcar como entregue` devem sumir da tela
```

### 2 - Desenvolver os status para o pedido da tela `Pedidos` do Administrador
- Todo pedido realizado deve ter um status referente ao seu progresso atual.

- Os `status` do pedido devem ser os seguintes:

   - `Pendente` logo quando o pedido for criado;

   - `Preparando` quando o pedido for iniciado pelo usuário admin;

   - `Entregue` quando o pedido for finalizado pelo usuário admin;

#### Tela de `Pedido` do Administrador

![Tela de pedido Administrador](./public/pedidosadmin.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Dado que é feito uma compra, será validado que ela está com status `Pendente` na tela de `Pedidos` do admin

- Dado que o pedido foi marcado como entregue será validado que na tela de `Pedidos` do admin, o status estará como `Entregue`

- Dado que o pedido foi marcado como preparando será validado que na tela de `Pedidos` do admin, o status estará como `Preparando`
```

### 3 - Desenvolver os status para o pedido da tela `Pedidos do Cliente`

- Todo pedido realizado deve ter um status referente ao seu progresso atual.

- Os `status` do pedido devem ser os seguintes:

   - `Pendente` logo quando o pedido for criado;

   - `Preparando` quando o pedido for iniciado pelo usuário admin;

   - `Entregue` quando o pedido for finalizado pelo usuário admin;.

#### Tela de `Pedidos` do Cliente

![Tela pedidos de cliente](./public/pedidoscliente.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Dado que é feito uma compra, será validado que ela está com status `Pendente` na tela de `Meus pedidos` do cliente

- Dado que o admin marcou o pedido como `Preparando` é verificado que na tela de `Pedidos` do cliente o status mudou para `Preparando`

- Dado que o admin marcou o pedido como `Entregue` é verificado que na tela de `Pedidos` do cliente o status mudou para `Entregue`
```

### 4 - Desenvolver os status para o pedido da tela `Detalhes de Pedido` do Cliente

- Todo pedido realizado deve ter um status referente ao seu progresso atual.

- Os `status` do pedido devem ser os seguintes:

   - `Pendente` logo quando o pedido for criado;

   - `Preparando` quando o pedido for iniciado pelo usuário admin;

   - `Entregue` quando o pedido for finalizado pelo usuário admin;.

#### Tela de `Detalhes de Pedido` do Cliente

![Detalhe pedido Administrador](./public/detalhespedidocliente.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Dado que é feito uma compra, será validado que ela está com status `Pendente` na tela de `Detalhes do pedido` do cliente

- Dado que o admin marcou o pedido como `Preparando` é verificado que na tela de `detalhe do pedido` do cliente o status mudou para `Preparando`

- Dado que o admin marcou o pedido como `Entregue` é verificado que na tela de `detalhe do pedido` do cliente o status mudou para `Entregue`
```

### 5 - Criar um botão no sidebar para acessar o chat do cliente

- Essa funcionalidade só deve existir na **visão de cliente**

- Adicionar ao menu lateral, uma botão de chat denominada `Conversar com a loja`.

    - Um clique no item descrito como `Conversar com a loja` deve levar para uma página de chat.

    - A rota da tela deve ser `/chat`;

#### Sidebar do Cliente

- O botão 'Conversar com a loja' deverá conter a tag `data-testid="side-menu-chat"`

![Detalhe pedido Administrador](./public/sidebarCliente.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Será validado que o botão `Conversar com a loja` existe no sidebar do cliente

- Será validado que ao clicar no menu `Conversar com a loja` será redirecionado para página na url `/chat`
```

### 6 - Desenvolver funcionalidade de chat na visão de cliente

- Essa funcionalidade só deve existir na **visão de cliente**

- Na página de chat, as mensagens devem aparecer ordenadas com as mais recentes embaixo.

    - A página deve mostrar as mensagens enviadas e recebidas, com as mensagens mais recentes mais embaixo.

    - A página deve ter um input para digitar o texto e um botão para envio de nova mensagem ao chat.

- O nickname do cliente deve ser o email cadastrado.

- O chat deve conter tambem a hora que a mensagem foi enviada.

- A hora deve ter o formato `15:30`.

- O histórico da conversa deve ser salvo no banco de dados `MondoDB` e aparecer quando a pessoa abre a página.

#### Tela do Detalhe de chat do cliente

- O elemento com o nickname do cliente deverá conter a tag `data-testid="nickname"`

- O elemento com a data da mensagem deverá conter a tag `data-testid="message-time"`

- O elemento com a mensagem do cliente deverá conter a tag `data-testid="text-message"`

- O input de escrever a mensagem deverá conter a tag `data-testid="message-input"`

- O botão para enviar a mensagem deverá conter a tag `data-testid="send-message"`

![Chat do cliente](./public/telachatcliente.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Será validado que existe o campo input e o botão de enviar mensagem

- Será validado que ao enviar mensagem o `nickname` do cliente é o seu email

- Será validado que ao enviar mensagem a data fica visível na tela

- Será validado que ao enviar mensagem a mensagem fica visível na tela

- Será validado que ê possivel enviar várias mensagens
```

### 7 - Criar botão no sidebar para acessar a lista de chats do administrador

- Essa funcionalidade só deve existir na **visão de admin**

- A plataforma deve ter acessível, no menu lateral, uma funcionalidade de chats denominada `Conversas`.

    - Um clique no item descrito como `Conversas` deve levar para uma página de listas de chats.

    - A rota da tela deve ser `/admin/chats`;

#### Sidebar Administrador

- O botão 'Conversas' deverá conter a tag `data-testid="side-menu-item-chat"`

![Chat do cliente](./public/sidebarAdmin.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Será validado que no meu sidebar contém o botão `Conversas`

- Será validado que ao clicar no menu `Conversas` será redirecionado para página na url `/admin/chats`
```

### 8 - Criar funcionalidade de lista de conversas de chat na visão de administrador

- Essa funcionalidade só deve existir na **visão de admin**

- A paginá deverá conter uma lista de conversas lista com todas as conversas da loja.

    - As conversas devem aparecer numa lista. Cada conversa deve ser identificada pelo email da pessoa cliente em questão.

        - Um clique no email do cliente deve redirecioanar para a janela com o chat daquela conversa.

    - A lista de conversas deve ser ordenada pela data da última mensagem.

    - Caso não tenham conversas, deve ser exibido o texto "Nenhuma conversa por aqui".

#### Tela de listas de conversas

  - O texto `Nenhuma conversa por aqui` deverá conter o data-testid="text-for-no-conversation"

  - O texto com email do cliente deverá conter o `data-testid="profile-name"`

  - O texto com a última mensagem deverá conter o `data-testid="last-message"`

  - Os cards do chat devem conter o `data-testid="containerChat"`

  ![Chat do cliente](./public/listadeconversas.png)

#### Além disso,as seguintes verificações serão feitas:
```
- Será validado que ao entrar na tela de `admin/chats` e não houver conversas e validado se contém o texto `Nenhuma conversa por aqui`

- Será validado que ao entrar na tela de `admin/chats` e existir uma conversa verifico se contém o card

- Será validado que ao entrar na tela de `admin/chats` e existir uma conversa verifico se dentro do card contem o email do cliente

- Será validado que ao entrar na tela de `admin/chats` e existir uma conversa verifico se dentro do card contem data da ultima mensagem

- Será validado que ao clicar no card da conversa e redirecionado pra conversa
```

### 9 - Desenvolver funcionalidade de chat na visão de administrador

- Um clique num item da lista de conversas deve exibir na tela o respectivo chat.

    - Um clique em um item da lista deve exibir na tela a janela com o chat daquela conversa.

    - O _nickname_ da loja na conversa deve ser "Loja".

    - A página da conversa deve mostrar, no topo da tela, o email do usuário que a Loja está conversando.

    - A página da conversa deve ter um botão de voltar que ao ser clicado redireciona a pessoa a página de listagem de conversas novamente.

- O histórico de cada conversa deve ser salvo no banco de dados e aparecer quando a pessoa abre a página.

- A lista de conversas deve ser ordenada pela data da última mensagem.

    - A lista de conversas deve ser ordenada pela data da última mensagem (recebida ou enviada), as mais recentes no topo da lista.

#### Tela de chat do admin

![Chat do admin](./public/chatAdmin.png)

  - O campo input de mensagem deverá conter a tag `data-testid="message-input"`

  - O botão de enviar mensagem deverá conter a tag `data-testid="send-message"`

- O email da mensagem deverá conter a tag `data-testid="nickname"`

- A hora da mensagem deverá conter a tag `data-testid="message-time"`

- O texto da mensagem deverá conter a tag `data-testid="text-message"`

- O botão voltar deverá conter a tag `data-testid="back-button"`

#### Além disso,as seguintes verificações serão feitas:
```
- Será validado que ao clicar no card da conversa poderá ser visualizado as mensagem do cliente

- Será validado que é possivel enviar mensagem

- Será validado que ao enviar mensagem o nickname do admin e `Loja`

- Será validado que ao enviar mensagem e listado a hora do envio da mensagem

- Será validado que é possivel voltar pra tela de `admin/chat` através do botão voltar

- Será validado que é possivel enviar mensagem para o cliente e a mensagem poderá ser visualizada pelo cliente
```

### 10 - Desenvolva a cobertura de testes unitários do back-end

- A cobertura de testes unitários do back-end deve ser de, no mínimo, 90%.

# Requisitos bônus

### 11 - Realizar o deploy do projeto back-end e front-end

#### Deploy Heroku

IMPORTANTE: Crie uma variável de ambiente com o nome `GITHUB_USER` deverá ser criada com o seu usuário do github.

#### Faça o deploy do front-end:

Crie um app do Heroku com o front-end. Não é necessário a criação do Procfile aqui. Vamos deixar o Heroku utilizar as configurações padrões. No momento de criar o app do Heroku, utilize o buildpack descrito abaixo, em Dicas.

O nome do seu app no heroku deve ser seu nome de usuário do github seguido de "-front". Por exemplo, se o seu usuário do github for "joao", o nome do seu app será "joao-front" e a url precisar ser https://joao-front.herokuapp.com/.

 #### Faça o deploy do back-end:

Crie um app do Heroku com o back-end. Não é necessário a criação do Procfile aqui. Vamos deixar o Heroku utilizar as configurações padrões. No momento de criar o app do Heroku, utilize o buildpack descrito abaixo, em Dicas.

O nome do seu app no heroku deve ser seu nome de usuário do github seguido de "-back". Por exemplo, se o seu usuário do github for "joao", o nome do seu app será "joao-back" e a url precisar ser https://joao-back.herokuapp.com/.

Configure as variáveis de ambiente do app para apontar para as API's publicadas.

Faça o deploy com o git.

- Sera validado se é possivel acessar a aplicação e verificar se estou na tela url de login

- Será validado que é possível fazer cadastro de um cliente com sucesso e ser redirecionado para tela de produtos

### 12 - Desenvolva a cobertura de testes unitários do front-end

- A cobertura de testes unitários do front-end deve ser de, no mínimo, 90%.

---

# Depois de terminar o desenvolvimento
## OBS: Passo Opcional

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-00`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### Importante


O projeto Trybeer v1 é base para o projeto Trybeer v2, portanto, o cumprimento de 100% dos requisitos obrigatórios desse projeto (Trybeer v1) é um pré-requisito para o projeto Trybeer v2. O grupo precisa ter ciência que a não realização de todos os requisitos, mesmo garantindo a aprovação neste projeto com 80% dos requisitos opcionais antes do prazo inicial ou 90% dos requisitos totais depois do prazo, impactará na entrega do Trybeer v2. O prazo disponível para esse projeto contempla o tempo previsto para atingir o objetivo de concluir 100% dos requisitos obrigatórios. Dessa forma, o grupo chegará ao projeto Trybeer v2 com o trabalho adiantado e não precisará usar parte do prazo terminando os requisitos necessários do Trybeer v1 para começar o Trybeer v2

### REVISANDO UM PULL REQUEST
# Revisando um pull request

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

---

# Avisos finais

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário. Leva menos de 3 minutos!

Link: [FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

O avaliador automático não necessariamente avalia seu projeto na ordem em que os requisitos aparecem no readme. Isso acontece para deixar o processo de avaliação mais rápido. Então, não se assuste se isso acontecer, ok?
