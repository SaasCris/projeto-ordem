const botaAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const header = document.querySelector("header");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

const imagemLogo = document.querySelector(".logo")

botaAlterarTema.addEventListener("click", () => {

    const modoClaroEstaAtivo = body.classList.contains("modo-claro")
    const modoClaroHeaderAtivo = header.classList.contains("modo-claro") 

    body.classList.toggle("modo-claro");
    header.classList.toggle("modo-claro");

    if (modoClaroEstaAtivo, modoClaroHeaderAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/DanteBandana.png");
        imagemLogo.setAttribute("src", "./src/imagens/OrdoRealitas.png");
    } else {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/DanteOlhosAbertos.png");
        imagemLogo.setAttribute("src", "./src/imagens/OrdoRealitasPreto.png");
    }

});
