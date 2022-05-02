// criar variaveis quer armazine "nome", "sobrenome", "idade", e "cidade"
let userName = prompt('Digite seu nome:', 'Diogo');
let lastName = prompt('Digite seu sobrenome:', 'Martins');
let age = parseInt(prompt('Digite sua idade:', 32));
let city = prompt('Digite sua cidade:', 'Extrema');

// criar função para concatenar os valores atribuídos as variaveis
const concatData = (userName, lastName, age, city) =>
  `${userName} ${lastName}, ${age} anos - ${city}.`;

// exibir resultado da concatenação
alert(concatData(userName, lastName, age, city));
