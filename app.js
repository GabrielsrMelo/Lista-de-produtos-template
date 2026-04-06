'use strict'

import { listaProdutos } from "./produtos.js"

// Função responsável por transformar um objeto de produto em um elemento HTML (Card)
function manipularProdutos(produto) {
    //Cria o elemento principal que conterá todas as informações 
    const card = document.createElement('div')
    card.className = 'card'

    //Cria o cabeçalho para exibir a categoria do produto
    const categoria = document.createElement('h4')
    categoria.textContent = produto.categoria

    //Cria o elemento de imagem e define o caminho do arquivo baseado no objeto
    const imagem = document.createElement('img')
    imagem.src = `./img/${produto.imagem}`

    //Cria o span para adicionar o nome do Produto
    const nomeProduto = document.createElement('span')
    nomeProduto.textContent = produto.nome

    //Cria um h4 ´para exibir o preço formatado com o símbolo de moeda
    const valor = document.createElement('h4')
    valor.textContent = `R$${produto.preco}`

    //Cria um container (div) para agrupar a nota do produto e as estrelas 
    const classificacaoContainer = document.createElement('div')
    classificacaoContainer.className = 'classificacao-container'

    //Cria um span para as estrelas, repetindo o ícone conforme a nota (ex: 5)
    const estrelas = document.createElement('span')
    estrelas.className = 'estrelas'
    estrelas.textContent = '⭐'.repeat(produto.classificacao)

    // Cria um span para exibir o número da classificação entre parênteses
    const nota = document.createElement('span')
    nota.className = 'nota-numero'
    nota.textContent = ` (${produto.classificacao})` 

    // Adiciona a nota e as estrelas dentro do container de classificação
    classificacaoContainer.append(nota, estrelas)

    // Cria um h5 para a descrição detalhada do produto
    const descricao = document.createElement('h5')
    descricao.textContent = produto.descricao

    // Monta um card completo adicionando todos os elementos criados na ordem
    card.append(categoria, imagem, nomeProduto, valor, classificacaoContainer, descricao)

    // Retorna o card pronto para ser inserido no HTML
    return card
}
// Percorre o array 'listaProdutos' e cria um novo array 'cards' contendo os elementos HTML gerados
const cards = listaProdutos.map(manipularProdutos)

// Seleciona o container no HTML e substitui todo o seu conteúdo pelos novos cards
// O operador '...' (spread) expande o array de cards como argumentos individuais para o replaceChildren
document.getElementById('container').replaceChildren(...cards)