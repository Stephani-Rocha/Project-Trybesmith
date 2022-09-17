# Project Trybesmith

# Contexto
No projeto de backend Trybesmith, simulamos uma loja de itens medievais no qual através de #CRUDs foram realizadas operações de criação, leitura, atualização e exclusão de produtos, usuários e pedidos, tudo utilizando o MySQL. Como padrão de organização foi utilizado o MSC, o que contribuiu para a API ser REST.Para autenticar os usuários cadastrados foi utilizado o JWT que gera uma assinatura difgital (Token).Os commits estão no padrão convencional.

## Tecnologias usadas
Back-end:
> Desenvolvido usando: Node, Express, Docker, Typescript, MySQL, JWT.
## Instalando Dependências
> Backend
```bash
cd Project-Trybesmith
npm install
```
## Executando aplicação
* Para rodar o back-end:
  ```
  docker-compose up -d
  *A aplicação estará rodando na porta 3000: http://localhost:3000/ do navegador
  ```
* Para subir o nodemon e fazer as requisições:
  ```
  Abra um terminal e rode: docker exec -it trybesmith bash
  Dentro do bash execute: npm run dev
  ```
## Executando Testes
* Para rodar todos os testes:
  ```
    npm test
  ```
