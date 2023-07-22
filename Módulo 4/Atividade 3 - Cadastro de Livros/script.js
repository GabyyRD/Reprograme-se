(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_livros')) ?? [];
}

function setLocalStorage(bd_livros) {
  localStorage.setItem('bd_livros', JSON.stringify(bd_livros));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela(); 
  const bd_livros = getLocalStorage();
  let index = 0;
  for (livro of bd_livros) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.paginas}</td>
        <td>${livro.data}</td>
        <td>${livro.genero}</td>
        <td>${livro.modelo}</td>
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const livro = {
    titulo: document.getElementById('titulo').value,
    autor: document.getElementById('autor').value,
    paginas: document.getElementById('paginas').value,
    data: document.getElementById('data').value,
    genero: document.getElementById('genero').value,
    modelo: document.getElementById('modelo').value
  }
  const bd_livros = getLocalStorage();
  bd_livros.push(livro);
  setLocalStorage(bd_livros);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const bd_livros = getLocalStorage();
  bd_livros.splice(index, 1);
  setLocalStorage(bd_livros);
  atualizarTabela();
}

function verificarTitulo() { // Adaptação da função validar (10 pontos)
  const bd_livros = getLocalStorage();
  for (livro of bd_livros) {
    if (titulo.value == livro.titulo) {
      titulo.setCustomValidity("Este titulo já existe!");
      feedbackTitulo.innerText = "Este titulo já existe!";
      return false;
    } else {
      titulo.setCustomValidity("");
      feedbackTitulo.innerText = "Informe o titulo corretamente.";
    }
  }
  return true;
}

function validarPaginas() { // Adaptação da função validar (10 pontos)
  const bd_livros = getLocalStorage();
  for (livro of bd_livros) {
    if (isNaN(paginas.value)) {
      paginas.setCustomValidity("Número de páginas inválida!");
      feedbackPaginas.innerText = "Número de páginas inválida!";
      return false;
    } else {
      paginas.setCustomValidity("");
      feedbackPaginas.innerText = "Informe o número de páginas corretamente.";
    }
  }
  return true;
}

atualizarTabela();
const titulo = document.getElementById("titulo");
const feedbackTitulo = document.getElementById("feedbackTitulo");
titulo.addEventListener('input', verificarTitulo);
const paginas = document.getElementById("paginas");
const feedbackPaginas = document.getElementById("feedbackPaginas");
paginas.addEventListener('input', validarPaginas);