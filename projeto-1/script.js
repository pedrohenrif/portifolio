const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector("#buttonPerguntar")
const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não conte com isso.",
    "Sem dúvidas!",
    "Provavelmente.",
    "Sim, definitivamente.",
    "Pergunte novamente mais tarde.",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver. Sim",
    "Minhas fontes dizem não.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentra-se a pergunte novamente.",
    "Sinais apontas que sim.",
]

// clicar em fazer pergunta
function fazerPergunta(){

    if (inputPergunta.value == "") {
        alert("Digite sua pergunta.")
        return
    }

    buttonPerguntar.setAttribute("disabled", true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"

    const totalRespostas = respostas.length     
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas)   // usando a funcao random para gerar um num aleatorio

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
    elementoResposta.style.opacity = 1;

    
    // configurando a saida da resposta em 3s
     setTimeout (function(){
        elementoResposta.style.opacity = 0;
        buttonPerguntar.removeAttribute("disabled")
     }, 3000)    // a contagem do tempo e em milisegundos
     
}






