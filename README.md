## INTRODUÇÃO

Boilerplate simples com express, com uma pré configuração do Sequelize e implementação simples
de usuário.

## REQUISITOS MINIMOS
- NodeJs versão 10 ou superior

### INICIANDO A APLICAÇÃO

Instalar dependencias `npm i`
Subir a mesma com o comando `npm run local`, mas para isso deve configurar um banco de dados
manualmente.

### ESTRUTURA DE PASTAS E ARQUIVOS

 - `src/`: pasta onde conterá todos os recursos da aplicação;
 - `src/infra/`: pasta responsavel pelas configurações gerais da infraestrutura do produto, tais como bancos de dados e configurações gerais;
 - `src/interfaces/`: pasta que contém as interfaces de cominucação;
 - `src/interfaces/http/`: responsavel por gerenciar a comunicação http;
 - `src/interfaces/sequelize/`: responsavel por gerenciar as ações no banco com sequelize;
 - `src/helpers/`: pasta que contém modulos auxiliadores globais;
 - `src/modules/`: pasta que contém os recursos separadamente;
 - `src/modules/<Service_name>/`: cada pasta dentro de modules é conhecida como Serviços Independentes e que podem interagir entre si, para o nome de serviços com letra maiúscula;
 - `src/modules/<Service_name>/models/`: Pasta que contém os esquemas da models, pode haver mais de uma model por serviços caso necessário. Também é importante que as models esteja dentro desta pasta para que a ferramenta importe a mesma;
 - `src/modules/<Service_name>/rest/`: possui as regras de negócio no padrão rest;
 - `src/modules/<Service_name>/router/`: possui as rotas definidas;
 - `src/modules/Exemplo`: modulo de exemplo para novas implementações de serviços
 - `src/globals.js`: arquivo de variaveis globais
