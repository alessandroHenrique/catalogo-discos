# catalogo-discos
[![License: MIT](https://img.shields.io/github/license/alessandroHenrique/catalogo-discos.svg)](LICENSE.txt)
[![Build Status](https://circleci.com/gh/alessandroHenrique/catalogo-discos/tree/master.svg?style=shield)](https://circleci.com/gh/alessandroHenrique/catalogo-discos)

Aplicação de catálogo de discos utilizando Node.js, MySQL e React.js
Você pode olhar o projeto deployado no Heroku nesse [link](https://catalogo-discos.herokuapp.com).

## Rodando o projeto localmente
As seguintes instruções vão lhe guiar para instalar o projeto e suas dependências.

### Instalando dependências
No root do projeto, execute o seguinte comando no shell:

```
npm i
```
Agora entre dentro da pasta `client` e execute o mesmo comando:

```
npm i
```

Caso não tenha Sass instalado globalmente, instale com o seguinte comando:

```
npm i -g sass
```

Renomeie o arquivo `.env.example` para `.env` e insira suas configurações de banco de dados.

### Schema do banco MySQL
As tabelas utilizadas nessa aplicação são `collection` que representa uma coleção de discos e `disc` que representa cada disco. O schema das tabelas está dentro do arquivo `schema.sql`, com o qual você pode usar no seu banco MySQL via linha de comando da seguinte forma:

```
mysql --host=YOUR_HOST_URL --user=YOUR_USERNAME --password=YOUR_PASSWORD YOUR_DB_NAME < schema.sql
```

Após todas as dependências estarem instaladas e o banco de dados configurado, execute o seguinte comando para rodar a aplicação localmente:

npm run dev

Vá para [http://localhost:3000/](http://localhost:3000/) no seu browser.

## Endpoints da Api

# /api/collections
Esse recurso diz respeito as coleções de discos.

## GET
+ Response 200

```
        [
          {
            "id": "1",
            "title": "Sucessos dos anos 2000",
            "cds": [
              {
                "id": "1",
                "title": "All that you cant leave behind",
                "author": "U2",
                "collection_id": "1"
              },
              {
                "id": "2",
                "title": "Quatro estacoes",
                "author": "Sandy e Junior",
                "collection_id": "1"
              }
            ]
          },
          {
            "id": "2",
            "title": "Para passar o tempo",
            "cds": [
              {
                "id": "3",
                "title": "Ghost Ballads",
                "author": "Dean Gitter",
                "collection_id": "2"
              },
              {
                "id": "4",
                "title": "Strange Trails",
                "author": "Lord Huron",
                "collection_id": "2"
              }
            ]
          }
        ]
```

## POST
+ Request

```
        {
          "title": "Alto astral"
        }
```

+ Response 201

```
        {
          "id": "3",
          "title": "Alto astral",
          "discs": []
        }
```

# /api/collections/:id

## GET
+ Response 200

```
        {
          "id": "1",
          "title": "Sucessos dos anos 2000",
          "discs": [
            {
              "id": "1",
              "title": "All that you cant leave behind",
              "author": "U2",
              "collection_id": "1"
            },
            {
              "id": "2",
              "title": "Quatro estacoes",
              "author": "Sandy e Junior",
              "collection_id": "1"
             }
           ]
          }
```

## PUT
+ Request - /api/collections/1

```
        {
          "title": "Sucessos dos anos 2010"
        }
```

+ Response 200

```
        {
          "id": "1",
          "title": "Sucessos dos anos 2010"
        }
```

## DELETE
+ Response 200

# /api/discs
Esse recurso diz respeito aos discos das coleções.

## GET
+ Response 200

```
        [
          {
            "id": "1",
            "title": "All that you cant leave behind",
            "author": "U2",
            "collection_id": "1"
          },
          {
            "id": "2",
            "title": "Quatro estacoes",
            "author": "Sandy e Junior",
            "collection_id": "1"
          },
          {
            "id": "3",
            "title": "Ghost Ballads",
            "author": "Dean Gitter",
            "collection_id": "2"
          },
          {
            "id": "4",
            "title": "Strange Trails",
            "author": "Lord Huron",
            "collection_id": "2"
          }
        ]
```

## POST
+ Request

```
        {
          "title": "Evolve",
          "author": "Imagine Dragons",
          "collection_id": "2"
        }
```

+ Response 201

```
        {
          "id": "5",
          "title": "Evolve",
          "author": "Imagine Dragons",
          "collection_id": "2"
        }
```

# /api/discs/:id

## GET
+ Response 200

```
        {
          "id": 5,
          "title": "Evolve",
          "author": "Imagine Dragons",
          "collection_id": "2"
        }
```

## PUT
+ Request - /api/discs/5

```
        {
          "id": "5",
          "title": "O tempo e agora",
          "author": "Anavitoria",
          "collection_id": "2"
        }
```

+ Response

```
        {
          "id": "5",
          "title": "O tempo é agora",
          "author": "Anavitoria",
          "collection_id": "2"
        }
```

## DELETE
+ Response 200
