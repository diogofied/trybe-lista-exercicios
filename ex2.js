// criar variável para armazenar idade do usuário
let userAge = parseInt(prompt('Digite sua idade:', 32));

// criar função para testar condição
const voteStatus = (userAge) => {
  if (userAge <= 15) {
    return 'Não pode votar.';
  } else if (userAge >= 18 && userAge <= 69) {
    return 'Voto obrigatório.';
  } else {
    return 'Voto Facultativo.';
  }
};

// exibir mensagem
alert(voteStatus(userAge));
console.log(userAge);
