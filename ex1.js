//criar variaveis para armazenar as notas
let a = parseInt(prompt('Nota do exercício A:', 10));
let b = parseInt(prompt('Nota do exercício B:', 10));

//função para calcular média das notas
let calcAverage = 0;
const gradeAverage = (a, b) => {
  calcAverage = (a + b) / 2;

  if (calcAverage == 10) {
    return 'Aprovado com distinção.';
  } else if (calcAverage >= 7) {
    return 'Aprovado.';
  } else {
    return 'Reprovado.';
  }
};

//exibir mensagem
alert(gradeAverage(a, b));
console.log(`Média das notas é de: ${calcAverage} pontos.`);
