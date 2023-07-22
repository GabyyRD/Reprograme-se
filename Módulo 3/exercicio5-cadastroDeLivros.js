const prompt = require('prompt-sync')();
var array_livros = [];
var resultado = false;

do {
  console.log("Sistema de Cadastro de Livros");
  console.log("1 - Inserir Livro");
  console.log("2 - Excluir Livro");
  console.log("3 - Listar obras no catálogo");
  console.log("4 - Atualizar cadastro")
  console.log("0 - Sair");

  var opcao = prompt("Digite sua opção: ");

  if (opcao == 1) {
    console.log("\n\nInserindo nova obra...\n");
    let codigo = parseInt(prompt("Digite o código: "));
    while(isNaN(codigo)){
      console.log("\nO código deve ser um número\n");
      codigo = parseInt(prompt("Digite o código: "));
    }
    for(let i=0;i < array_livros.length;i++){
      while (array_livros[i]['codigo'] == codigo){
        console.log("\nEste código já está em uso.");
        codigo = parseInt(prompt("Digite o código: "));
      }
    }
    let titulo = prompt("Digite o título do livro: ");
    let autor = prompt("Digite o nome do autor: ");
    let genero = prompt("Digite o gênero literário: ");
    let paginas = prompt("Digite o número de páginas: ");
    while(isNaN(paginas)){
      console.log("\nNúmero de páginas inválido, verifique se você colocou apenas número\n");
      paginas = prompt("Digite o número de páginas: ");
    }
    // Neste trecho estamos declarando um objeto
    const livro = {
      codigo: codigo,
      titulo: titulo,
      autor: autor,
      genero: genero,
      paginas: paginas
    }
    // Chamar a função inserir
    inserir_livro(livro);
  } else if (opcao == 2) {
    console.log("\n\nExcluindo livro...\n");
    let codigo = prompt("Digite o código do livro: ");
    // Chamar a função excluir
    excluir_livro(codigo)
  } else if (opcao == 3) {
    console.log("\n\nListando livros...\n");
    // Chamar a função listar
    listar_livros();
  } else if (opcao == 4) {
    console.log("\n\nAtualizando livro...\n");
    atualizar_livro();
  } else {
    console.log("\n\nSaindo do programa...\n");
  }

  prompt("\nEnter para continuar...");
  console.clear();
} while (opcao != 0)


function inserir_livro(livro) {
  // Implementar corpo da função
  array_livros.push(livro);
}

function excluir_livro(codigo) {
  // Implementar corpo da função
  for(let i=0;i < array_livros.length;i++) {
    if (array_livros[i]['codigo'] == codigo) {
      resultado = true;
      array_livros.splice(i, 1);
      console.log("\nCadastro excluído com sucesso!");
    } 
  }
  verificar(resultado);
}

function listar_livros() {
  // Implementar corpo da função
  for(i = 0; i < array_livros.length; i++){
    console.log(`CÓDIGO: ${array_livros[i]['codigo']}\nTítulo: ${array_livros[i]['titulo']}\nAutor:${array_livros[i]['autor']}\nGênero literário: ${array_livros[i]['genero']}\nNúmero de páginas: ${array_livros[i]['paginas']}\n\n`);
  }
  if(array_livros == 0) {
    console.log("Nenhum cadastro realizado.")
  }
}

function atualizar_livro(codigo) {
  codigo = prompt("Digite o código do livro: ");
  for(let i=0;i < array_livros.length;i++){
    if (array_livros[i]['codigo'] == codigo) {
      console.log("\n\nDADOS ATUAIS:\n")
      console.log(`CÓDIGO: ${array_livros[i]['codigo']}\nTítulo: ${array_livros[i]['titulo']}\nAutor:${array_livros[i]['autor']}\nGênero literário: ${array_livros[i]['genero']}\nNúmero de páginas: ${array_livros[i]['paginas']}\n\n`);
      console.log("\nINSIRA OS NOVOS DADOS:\n");
      titulo = prompt("Digite o título do livro: ");
      autor = prompt("Digite o nome do autor: ");
      genero = prompt("Digite o gênero literário: ");
      paginas = prompt("Digite o número de páginas: ");
      while(isNaN(paginas)){
        console.log("\nNúmero de páginas inválido, verifique se você colocou apenas número\n");
      paginas = prompt("Digite o número de páginas: ");
      }
      array_livros[i]['titulo'] = titulo;
      array_livros[i]['autor'] = autor;
      array_livros[i]['genero'] = genero;
      array_livros[i]['paginas'] = paginas;
      resultado = true;
    } 
  }
  verificar(resultado);
}

function verificar(resultado) {
  if(resultado == false){
    console.log("\nEste código não se encontra nos registros.")
  }
}
