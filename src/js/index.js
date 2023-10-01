const botoes = document.querySelectorAll(".botao");

const personagens = document.querySelectorAll(".personagem")

botoes.forEach((botao, indice)  => {
    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        botaoSelecionado.classList.remove("selecionado")
        botao.classList.add("selecionado");

        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado")

        personagens[indice].classList.add("selecionado")
    })
})