const prompt = require('prompt-sync')();

var alturas = []
var altura;
var menores = [];
var contar;

// Implementar a entrada de dados
for (var i = 0; i < 10; i++) {
  altura = parseFloat(prompt("Digite a altura do aluno " + (i + 1) + ": "))
  alturas.push(altura);
}
// Implementar o processamento de dados
for (var i = 0; i < 10; i++) {
  contar = 0;
  for (var k = 0; k < 10; k++) {
    if (alturas[i] > alturas[k]) {
      contar++;
    }
  }
  menores.push(contar);
}
// Implementar a saída de dados
for (var i = 0; i < 10; i++) {
  console.log("Aluno " + (i+1) + ": maior que " + menores[i] + " aluno(s)");
}
