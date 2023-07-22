// Selecionar todos elementos da classe 'produto_preco'
let produtoPreco = document.getElementsByClassName('produto_preco');

// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
let i;
let soma = 0;
for(i=0; i<produtoPreco.length; i++){
  soma += parseFloat(produtoPreco[i].innerText);
}

// Escrever no conteúdo da página o valor da soma
document.write("Total: R$ ", soma);
