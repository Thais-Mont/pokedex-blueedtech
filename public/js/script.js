const closeMessage = document.querySelector('#close');
const mensagem = document.querySelector('#mensagem');

closeMessage.addEventListener("click", function (){
  mensagem.style.display = "none";
});

if(mensagem === "") {
  mensagem.style.display = "none";
}