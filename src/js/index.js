const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");
console.log(body);

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")


botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.gif");
        

    } else {
        body.classList.add("modo-escuro");

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.gif");
        
    }

});





