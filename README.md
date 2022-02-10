<img alt="npm" src="https://img.shields.io/npm/v/node">
<h1>API Financias</h1>
  <p align="center"> Este projeto se trata de uma api rest, com a finalidade de ajudar seus usuários fazer o controle financeiro </p>
<h1> Tabelas de conteúdos</h1>
  <p align="center">
  <a href="#prerequisitos">pré-requisitos</a> •
  <a href="#instalacao">Instalação</a> •
  <a href="#status">Status do projeto</a> •
  <a href="#features">Features</a> •
  <a href="#tecnologias">Tecnologias</a> •
  <a href="#autor">Autor</a>
  </p>

<h4 id='prerequisitos'>pré-requisitos</h4>
  <p> Para rodar a aplicação você precisará ter instalado em sua maquina o node na versão 12.18.4 ou superior e precisara
  ter o também o mysql instalado ou uma instância do mesmo no docker.
  </p>

<h4 id='instalacao'>Instalação</h4>
  <p> Para instalação do projeto, siga os seguintes passos:

  <h5>Clone o projeto</h5>
  <p>Repositório https://github.com/Diego-veiga/Financias.git </p>

  <h5>Instale as dependências</h5>
  npm i

  <h5>Crie o banco de dados</h5>
  npx sequelize db:create

  <h5>Execute as modificações do banco de dados </h5>
  npx sequelize db:migrate


<h4 id='status'>
  > Status do Projeto: Em desenvolvimento :warning:
</h4>

<h4 id='features'>Features</h4>
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
