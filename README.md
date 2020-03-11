# Simple Like

Um like bem simples e livres de cookies para ser usado no seu website.

## Uso

Você pode hospedar o seu próprio Simple Like e guardar as suas próprias informações, veja como nas sessões abaixo.

No final você irá apenas importar o arquivo javascript:

```html
<script src="https://your-simple-like-project.firebaseapp.com/direflowBundle.js"></script>
```
E adicionar na sua página a tag:

```html
<simple-like></simple-like>
```

## Requerimentos

- Node / NPM
- Firebase CLI
- Projeto no Firebase

## Instalação

1) Clone este repositório.
2) `cd client/` 
3) Copie o arquivo `.env.example` e renomeie para `.env`.
4) Configure com as informações da sua conta do Firebase:

```
REACT_APP_APIKEY=
REACT_APP_DATABASE_URL=https://exemplo.firebaseio.com
REACT_APP_PROJECT_ID=exemplo
REACT_APP_STORAGE_BUCKET=exemplo.appspot.com
```

4) `npm install`

## Desenvolvimento

`npm start`

## Teste

`npm test`

## Build / Construir

Para buildar / construir / empacotar o projeto para o hosting do Firebase use:

`npm run build`


## Deploy / Hosting

Via CLI do Firebase: 

1) `firebase login`
2) `firebase init` 
3) Escolha `(o) Hosting ...`
4) Escolha seu projeto ou crie um novo
5) `firebase deploy`

Use seu like livre de cookies.