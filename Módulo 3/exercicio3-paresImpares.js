const prompt = require('prompt-sync')();

var somaPares = somaImpares = 0;

for (i = 1; i <= 20; i = i + 1) {
  numero_quadrado = i * i;
  console.log(numero_quadrado);
  if (numero_quadrado % 2 == 0) {
    somaPares = somaPares + numero_quadrado;
  } else {
    somaImpares = somaImpares + numero_quadrado;
  }
}

console.log("A soma de quadrados pares: ", somaPares);
console.log("A soma de quadrados ímpares: ", somaImpares);