const botoesCategorias = document.querySelectorAll('.btn');

botoesCategorias.forEach(btn => btn.addEventListener('click', filtrarLivros))


function filtrarLivros(){
  const elementoBtn = document.getElementById(this.id);
  let livrosFiltrados = elementoBtn.value == 'disponivel' ? filtrarLivrosPorDisponibilidade() :filtrarLivrosPorCategoria(elementoBtn)
  exibirOsLivrosNaTela(livrosFiltrados)
  if(elementoBtn.value == 'disponivel'){
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
  }
}

function filtrarLivrosPorCategoria(elementoBtn) {
  return livros.filter(livro => livro.categoria == elementoBtn.value);
}

function filtrarLivrosPorDisponibilidade() {
  return livros.filter(livro => livro.quantidade > 0);
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
  elementoPrecoDeTodosOsLivros.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`
}