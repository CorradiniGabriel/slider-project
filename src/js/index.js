/*
OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
    * passo 01: dar um jeito de pegar o elemento HTML da seta avançar
    * passo 02: dar um jeito de identificar o clique do usuário na seta avançar
    * passo 03: fazer aparecer o próximo cartão da lista
    * passo 04: buscar o cartão que está selecionado e escondê-lo

OBJETIVO 2 - quando clicarmos na seta voltar temos que mostrar o cartão anterior da lista
    * passo 01: dar um jeito de pegar o elemento HTML da seta voltar
    * passo 02: dar um jeito de identificar o clique do usuário na seta voltar
    * passo 03: fazer aparecer o cartão anterior da lista
    * passo 04: buscar o cartão que está selecionado e escondê-lo

*/
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
const cartaoSelecionado = document.querySelector(".selecionado");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado"); 
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado");
}

//OBJETIVO 1
btnAvancar.addEventListener("click", function ()  {
    if(cartaoAtual === cartoes.length - 1) return;      
    
    esconderCartaoSelecionado();

    cartaoAtual++;   
    mostrarCartao(cartaoAtual);
});

// OBJETIVO 2
btnVoltar.addEventListener("click", function ()  {
    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();   

    cartaoAtual--;  
    mostrarCartao(cartaoAtual);
      
});

        

  
    








