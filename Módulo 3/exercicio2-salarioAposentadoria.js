const prompt = require('prompt-sync')();

idade = parseInt(prompt("Digite sua idade: "));
tempo = parseInt(prompt("Digite seu tempo de serviço: "));
salario = parseFloat(prompt("Digite seu salário: "));


if  (idade >= 65 || tempo >= 30 || idade >= 60 && tempo >=25) {
  console.log("Você pode se aposentar!");
  if (tempo > 20) {
    var salarioAposentadoria = salario * 0.8;
  } else if (tempo <= 20) {
    salarioAposentadoria = salario * 0.6;    
  }
  if (salarioAposentadoria < 1212.00) {
    console.log("Seu salário de aposentado será: 1212");
  } else if (salarioAposentadoria > 7087.22) {
    console.log("Seu salário de aposentado será: 7087.22");
  } else {
    console.log("Seu salário de aposentado será: ", salarioAposentadoria);
  }
} else {
  console.log("Você não pode se aposentar!");
}
