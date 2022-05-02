// criar array para armazenar uma sequência de números
let numSize = parseInt(prompt('Quantos número deseja comparar?', 6));
let numArr = [];

// criar estrutura de repetição para atribuir os número no array
for (let i = 0; i < numSize; i++) {
  numArr[i] = parseInt(prompt(`Digite o valor do #${i + 1} número:`, Math.round(Math.random() * 50)));
}

console.log(numArr);

// criar função que compare os valores e retorne uma nova array em ordem crescente
let sortArr = [];
const lowerNum = numArr => {
  sortArr = numArr;
  for (let i = 1; i < numSize; i++) {
    for (let j = 0; j < i; j++) {
      if (sortArr[i] < sortArr[j]) {
        [sortArr[j], sortArr[i]] = [sortArr[i], sortArr[j]];
      }
    }
  }

  return sortArr[0];
};
// exibir o menor número
lowerNum(numArr);
