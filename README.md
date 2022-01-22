# Consumo de API da NASA

### Aplicação voltada ao consumo de API fornecido no site oficial da NASA.

## Configurações
Para rodar o aplicativo é necessario você ter uma API da NASA para fazer o consumo, que você pode encontrar no site oficial deles: `https://api.nasa.gov`.

Apos gerado seu link de API, inserir na seguinte linha de codigo em `Sua API KEY` em `screens/Home/index.js`.
```js
  useEffect(() => {
    axios.get("Sua API KEY").then((response) => {
      setPlanetas(response.data)
    });
```

## Instalação
Apos feito o clone do repositorio execute o comando `npm install` ou `yarn install` para instalação das dependencias do projeto.

Depois de configurado sua API apenas execute o projeto com `expo start`.

## Exemplo de como ficaria no app.
<p align="center">
  <a href="#">
    <img src="https://i.imgur.com/MzGqLpP.png" width="250">
  </a>
</p>