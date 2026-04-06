'use strict'

import { listaProdutos } from "./produtos.js"

function manipularProdutos(produto) {
    const card = document.createElement('div')
    card.className = 'card'

    const categoria = document.createElement('h4')
    categoria.textContent = produto.categoria

    const imagem = document.createElement('img')
    imagem.src = `./img/${produto.imagem}`

    const nomeProduto = document.createElement('span')
    nomeProduto.textContent = produto.nome

    const valor = document.createElement('h4')
    valor.textContent = `R$${produto.preco}`

    // --- Lógica da Classificação (Apenas estrelas preenchidas + número) ---
    const classificacaoContainer = document.createElement('div')
    classificacaoContainer.className = 'classificacao-container'

    const estrelas = document.createElement('span')
    estrelas.className = 'estrelas'
    estrelas.textContent = '⭐'.repeat(produto.classificacao)

    const nota = document.createElement('span')
    nota.className = 'nota-numero'
    nota.textContent = ` (${produto.classificacao})` // Exibe o número entre parênteses

    classificacaoContainer.append(estrelas, nota)

    const descricao = document.createElement('h5')
    descricao.textContent = produto.descricao

    card.append(categoria, imagem, nomeProduto, valor, classificacaoContainer, descricao)

    return card
}
const cards = listaProdutos.map(manipularProdutos)

document.getElementById('container').replaceChildren(...cards)