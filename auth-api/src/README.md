# Auth API -> TempoApp

## Instalação

$ cd auth-api

$ cp .env.example .env

> Editar as várias de ambiente do banco de dados (postgres).
> Deve ser um banco específico para esse serviço.
> O arquivo de exemplo consta como banco auth2 de exemplo.

$ npm install

Agora é necessário criar o banco em produção.
Existem 2 opções, criar manualmente ou automatizar com o [sequelize-cli](https://github.com/sequelize/cli)

via sequelize-cli:

$ sequelize db:migrate

$ node ./bin/www

> **Observações:** <br>
> Este pacote possui scripts de automação para iniciar a aplicação, utilizando a ferramenta PM2. <br>
> É recomendada sua utilização para deploy em produção. [Leia Mais](http://pm2.keymetrics.io/docs/usage/quick-start/)