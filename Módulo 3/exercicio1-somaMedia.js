const prompt = require("prompt-sync")();

// Leia os três números
var numero1 = parseInt(prompt("Digite o número 1: "));
var numero2 = parseInt(prompt("Digite o número 1: "));
var numero3 = parseInt(prompt("Digite o número 1: "));

// Calcule a soma e a média
var soma = numero1 + numero2 + numero3;
var media = soma / 3;

// Mostre na tela o valor da soma e média
console.log("A soma é: ", soma);
console.log("A média é: ", media);