
const btOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btOrdenarPorPreco.addEventListener('click', ordenarPrecosDosLivros)

function ordenarPrecosDosLivros(){
  let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
  exibirOsLivrosNaTela(livrosOrdenados)
}