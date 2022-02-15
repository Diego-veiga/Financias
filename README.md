# API Financias

 Este projeto se trata de uma api rest, com a finalidade de ajudar seus usuários fazer o controle financeiro.

Tabela de conteúdos 
=================

<!--ts-->
   * <a href="#requisito">Pré-requisitos</a>
   * [Instalacao](#instalacao)
   * <a href="#status">Status do projeto</a>
   * [Features](#features)
   * [Tecnologias](#tecnologias)
   * [Autor](#autor)
<!--te-->

<h2 id="requisito">Pré-requisitos</h2>
 Para rodar a aplicação você precisará ter instalado em sua maquina o node na versão 12.18.4 ou superior e precisara
 ter o também o mysql instalado ou uma instância do mesmo no docker.

## Instalacao
   Para instalação do projeto, siga os seguintes passos:

  #### Clone o projeto
    Repositório https://github.com/Diego-veiga/Financias.git

  #### Instale as dependências
  ```bash
  npm i
  ```
  #### Crie o banco de dados
  ```bash
  npx sequelize db:create
  ```

  #### Execute as migrations
  ```bash
  npx sequelize db:migrate
  ```
<h2 id="status">Status do Projeto</h2>
  Em desenvolvimento


## Features

  - [x] Cadastro de usuário<br>
  - [ ] Cadastro de Bandeira do cartão de crédito<br>
  - [ ] Cadastro de cartão de crédito<br>
  - [ ] Criação da fatura do cartão<br>
  - [ ] Cadastro de despesas<br>
  - [ ] Cadastro de Receitas<br>
  - [ ] Cadastro de Categorias de Depesas<br>
  - [ ] Cadastro de Categorias de Receita<br>
  - [ ] Cadastro de contas bancarias<br>
  - [ ] Cadastro de instituições bancarias<br>
  
## Tecnologias
- [Express](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)
- [Sequelize](https://sequelize.org/v7/)

## Autor
<a href="https://www.linkedin.com/in/diegorobertoveiga/">
 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/62670446?s=400&u=ce360c7bc3872fde7996a64a630c3a44ecb1ed30&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Diego Veiga</b></sub></a> <a href="https://www.linkedin.com/in/diegorobertoveiga/" title="Diego Veiga">🚀</a>




